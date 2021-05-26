// b. 作成したCounterクラスに以下の機能を追加してください。

// - down: 呼ばれるとカウントが一つ減る
// - resetValue: 呼ばれると今カウントしている内容が0にリセットされる
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

let counter = new Counter;
counter.up();
console.log(counter.getValue()); // => 1と表示される
counter.up();
console.log(counter.getValue()); // => 2と表示される
counter.down();
console.log(counter.getValue()); // => 1と表示される
counter.resetValue();
console.log(counter.getValue()); // => 0と表示される
