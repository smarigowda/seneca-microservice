require("source-map-support").install();

// class Foo {
//   constructor() {
//     this.bar();
//   }

//   bar() {
//     throw new Error("This is a demo...");
//   }
// }

// new Foo();

type Context = {
  appId?: string;
  userId?: string;
};

function log(message: string, context: Context = {}) {
  let time = new Date().toISOString();
  console.log(time, message, context.userId);
}

log("Hello");
log("Hello", { userId: "1234" });
