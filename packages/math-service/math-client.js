const seneca = require("seneca")();

const callback = (error, result) => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(result);
};

seneca.client().act(
  {
    service: "math",
    command: "sum",
    data: {
      left: 10,
      right: 23
    }
  },
  callback
);
