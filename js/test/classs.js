class A {
  constructor(props) {
    this.a = props;
  }
  c = (a, b) => 1
  c(a) {
    return 1;
  }
}

class B extends A {
  constructor(props) {
    super(props);
    this.b = 1;
  }
}

const bb = new B();

bb.c(1, 2);

