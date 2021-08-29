function Calculator() {
  this.read = function () {
    this.a = prompt(a);
    this.b = prompt(b);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calc = new Calculator();

// console.log(calc.mul());

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("number?", 0);
  };
}

const accumulator = new Accumulator(1);

// console.log(accumulator);
