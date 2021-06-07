class Counter {
  #value

  constructor() {
    this.#value = 0;
  }

  // countを1つ増やす
  up() {
    this.#value++;
  }

  // countを表示
  getValue() {
    return this.#value;
  }
}

let counter = new Counter; // 数値をカウントアップするクラス
counter.up(); // ここでcounterの値を1つ増やす
console.log(counter.getValue());
counter.up(); // ここでcounterの値を1つ増やす
console.log(counter.getValue());

// counter.value = counter.value + 1; //ここでcounterの値を一つ増やしたい
// console.log(counter.value);
// counter.value = counter.value + 1; //ここでcounterの値を一つ増やしたい
// console.log(counter.value);
