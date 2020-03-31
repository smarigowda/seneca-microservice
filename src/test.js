const seneca = require("seneca")();

seneca.add({ role: "math", command: "sum" }, (msg, reply) => {
  reply(null, { answer: msg.left + msg.right });
});

seneca.act({ role: "math", command: "sum", left: 1, right: 2}, (err, result) => {
    if(err) {
        console.log(err)
    }
    console.log(result);
});
