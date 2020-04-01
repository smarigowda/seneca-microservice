const seneca = require("seneca")();

seneca.add({ service: "math", command: "sum" }, (msg, reply) => {
  let { left, right } = msg.data;
  reply(null, { answer: left + right });
});

seneca.act({ service: "math", command: "sum", data: { left: 1, right: 2} }, (err, result) => {
    if(err) {
        console.log(err)
    }
    console.log(result);
});
