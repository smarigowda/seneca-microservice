class Foo {
  constructor() {
    this.bar();
  }

  bar() {
    throw new Error("This is a demo...");
  }
}

new Foo();


