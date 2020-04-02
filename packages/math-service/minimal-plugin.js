const seneca = require("seneca")();

console.log(seneca);

const minPlugin = option => {
  console.log('---->', option);
};

seneca.use(minPlugin, { name: "Santosh Marigowda" });
