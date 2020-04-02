const seneca = require("seneca")();
const math = require("./math-plugin");

seneca.use(math).listen();
