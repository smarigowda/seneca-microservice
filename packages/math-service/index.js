const seneca = require("seneca")();

// Services
seneca.add({ service: "math", command: "sum" }, (args, callback) => {
  let { left, right } = args.data;
  callback(null, { answer: left + right });
});

seneca.add({ service: "math", command: "product" }, (args, callback) => {
  let { left, right } = args.data;
  callback(null, { answer: left * right });
});

seneca.add(
  { service: "math", command: "sum", integer: true },
  (args, callback) => {
    let { left, right } = args.data;
    seneca.act({ service: "math", command: "sum", data: { left: Math.floor(left), right: Math.floor(right) }}, callback)
    // callback(null, { answer: Math.floor(left) + Math.floor(right) });
  }
);

// Clients
seneca.act(
  { service: "math", command: "sum", data: { left: 1, right: 2 } },
  (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Service responded with result ! SUCCESS...");
    console.log(result);
  }
);

seneca.act(
  { service: "math", command: "product", data: { left: 2.9, right: 11.5 } },
  (err, result) => {
    if (err) {
      console.log("Error while serving command - product");
      throw err;
    }
    console.log(result);
  }
);

seneca.act(
  {
    service: "math",
    command: "sum",
    integer: true,
    data: { left: 2.9, right: 11.5 }
  },

  (err, result) => {
    if (err) {
      console.log("Error while serving command - math, integer=true");
    }
    console.log(result);
  }
);
