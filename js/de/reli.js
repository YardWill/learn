class Parent {
  constructor() {
    console.log(new.target);
    if (new.target === Parent) {
      console.log('Parent instantiated');
    } else {
      console.log('A child instantiated');
    }
  }
}

class Child extends Parent {}

const a = new Parent();
// Parent instantiated

const b = new Child();
// A child instantiated
