const calc = {
  read() {
    this.a = prompt(a);
    this.b = prompt(b);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// console.log(calc.read(), calc.sum());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};
console.log(ladder.up().up().up().down().showStep());
