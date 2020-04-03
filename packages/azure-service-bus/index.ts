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

let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  }
};

let itr = numbers[Symbol.iterator]();

// console.log(itr.next());

for (let num of itr) {
  console.log(num);
}
