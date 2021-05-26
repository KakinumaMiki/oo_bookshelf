// a. 以下のような仕様のCounterクラスを作成しましょう。
class Counter {
  constructor() {
    this.count = 0;
  }

  // countを1あげる
  up() {
    this.count++;
  }

  // countを表示
  getValue() {
    return this.count;
  }
}

let counter = new Counter;
counter.up();
console.log(counter.getValue()); // => 1と表示される
counter.up();
console.log(counter.getValue()); // => 2と表示される