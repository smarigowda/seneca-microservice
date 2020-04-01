const seneca = require("seneca")();

seneca.add({ service: "math", command: "sum" }, (message, reply) => {
  let { left, right } = message.data;
  reply(null, { answer: left + right });
});

seneca.add({ service: "math", command: "product" }, (message, reply) => {
  let { left, right } = message.data;
  reply(null, { answer: left * right });
});

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

seneca.act({ service: 'math', command: 'product', data: { left: 2, right: 5 }}, (err, result) => {
  if(err) {
    console.log('Error while serving command - product');
    throw err;
  }
  console.log(result);
})
