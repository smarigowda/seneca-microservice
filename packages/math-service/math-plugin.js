const seneca = require("seneca")();

function math(options) {
  console.log(options);
  this.add({ service: "math", command: "sum" }, (args, callback) => {
    let { left, right } = args.data;
    let answer = left + right;
    callback(null, { answer });
  });

  this.add({ init: "math" }, init);

  function init(args, callback) {
    console.log("args = ", args);
    console.log(callback);
    callback();
  }
}

seneca
  .use(math, { connectionString: "sjafjdkasdkfjaks" })
  .act(
    { service: "math", command: "sum", data: { left: 10, right: 23 } },
    console.log
  );
