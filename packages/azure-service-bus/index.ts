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

let itr1 = numbers[Symbol.iterator]();
let itr2 = numbers[Symbol.iterator]();
let itr3 = numbers[Symbol.iterator]();

// iterate with for of
for (let num of itr1) {
  console.log(num);
}

// spread an iterator
let allNumbers = [...itr2];
console.log(allNumbers);

// destructure an iterator
let [one, two, ...rest] = itr3;
console.log(one, two, rest);