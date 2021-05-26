// Counterクラスのインスタンスを2つ作成して、
// それぞれのカウントが無関係に増減することを確認できるサンプルコードを書いてください。
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