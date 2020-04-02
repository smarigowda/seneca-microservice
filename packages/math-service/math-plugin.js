const seneca = require("seneca")();

function math(options) {
  this.add({ service: "math", command: "sum" }, (args, callback) => {
    let { left, right } = args.data;
    let answer = left + right;
    callback(null, { answer });
  });
}

seneca
  .use(math)
  .act(
    { service: "math", command: "sum", data: { left: 10, right: 23 } },
    console.log
  );
