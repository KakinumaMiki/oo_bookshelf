class Counter {
  constructor() {
    this.value = 0;
  }
}

let counter = new Counter; // 数値をカウントアップするクラス
counter.value = counter.value + 1; //ここでcounterの値を一つ増やしたい
console.log(counter.value);
counter.value = counter.value + 1; //ここでcounterの値を一つ増やしたい
console.log(counter.value);
