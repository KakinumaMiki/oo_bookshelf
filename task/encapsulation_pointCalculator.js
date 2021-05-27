class ImmutablePoint {
  #name
  #point

  constructor(name, point) {
    this.#name = name;
    this.#point = point;
  }

  getName() {
    return this.#name;
  }

  getPoint() {
    return this.#point;
  }
}

class PointCalculator {
  #results

  static valueOf(arrayOfHash) {
    let pointCalculator = new this;

    for (let i = 0; i < arrayOfHash.length; i++) {
      let hash = arrayOfHash[i];
      let results = new ImmutablePoint(hash.name, hash.point);
     pointCalculator.addResult(results);
    }
    return pointCalculator;
  }

  constructor() {
    this.#results = [];
  }
  
  addResult(result) {
    this.#results.push(result);
  }
  // pointの合計
  sumPoint() {
    let point = 0;
    for(let i = 0; i < this.#results.length; i++) {
      point += this.#results[i].getPoint();
    }
    return point;
  }

  // pointの平均
  avePoint() {
    let point = this.sumPoint();
    let i = this.#results.length;
    return point / i ;
  }

  // 最高得点の人の名前取得
  maxPointName() {
    let point = 0;
    let max = 0;
    let name = null;
    for (let i = 0; i < this.#results.length; i++) {
      point = this.#results[i].getPoint();
      if (max < point) {
        max = point;
        name = this.#results[i].getName();
      }
    }
    return name;
  }
}

let results = [{name: '鈴木', point: 80}, {name: '田中', point: 92}, {name: '佐藤', point: 75}];
let pointCalculator = PointCalculator.valueOf(results);

console.log(pointCalculator.sumPoint()); // 合計 247
console.log(pointCalculator.avePoint()); // 平均 82.33…
console.log(pointCalculator.maxPointName()); // 田中

pointCalculator.addResult(new ImmutablePoint('阿部', 95));

console.log(pointCalculator.sumPoint()); // 合計 342
console.log(pointCalculator.avePoint()); // 平均 85.5
console.log(pointCalculator.maxPointName()); // 阿部