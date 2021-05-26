class Counter {
  constructor() {
    this.count = 0;
  }

  // countを1あげる
  up() {
    this.count++;
  }

  // countを1さげる
  down() {
    this.count--;
  }

  // countが0にリセットされる
  resetValue() {
    this.count = 0;
  }

  // countを表示
  getValue() {
    return this.count;
  }
}

let counter1 = new Counter;
let counter2 = new Counter;
counter1.up();
counter1.up();
console.log(counter1.getValue()); // => 2と表示される
counter2.down();
console.log(counter2.getValue()); // => -1と表示される
counter2.resetValue();
console.log(counter2.getValue()); // => 0と表示される


class EvenCounter {
  constructor() {
    this.count = 0;
    this.i = 0;
  }
  // 偶数回呼ばれた時countを1あげる
  up() {
    this.i++;
    if (this.i % 2 === 0) {
      this.count++;
    }
  }

  // countを表示
  getValue() {
    return this.count;
  }
}

let counter = new EvenCounter;

console.log('EvenCounter');
counter.up(); // => ここではアップしない
counter.up(); // => ここでアップ
console.log(counter.getValue()); // => 1と表示される
counter.up(); // => ここではアップしない
counter.up(); // => ここでアップ
counter.up(); // => ここではアップしない
console.log(counter.getValue()); // => 2と表示される