class Point {
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
  #points

  constructor() {
    this.#points = [];
  }
  
  static valueOf(arrayOfHash) {
    let pointCalculator = new this;

    for (let i = 0; i < arrayOfHash.length; i++) {
      let hash = arrayOfHash[i];
      let points = new Point(hash.name, hash.point);
     pointCalculator.addResult(points);
    }
    return pointCalculator;
  }

  addResult(result) {
    this.#points.push(result);
  }
  
  // pointの合計
  sumPoint() {
    let point = 0;
    for(let i = 0; i < this.#points.length; i++) {
      point += this.#points[i].getPoint();
    }
    return point;
  }

  // pointの平均
  avePoint() {
    let point = this.sumPoint();
    let i = this.#points.length;
    return point / i ;
  }

  // 最高得点の人の名前取得
  maxPointName() {
    let point = 0;
    let max = 0;
    let name = null;
    for (let i = 0; i < this.#points.length; i++) {
      point = this.#points[i].getPoint();
      if (max < point) {
        max = point;
        name = this.#points[i].getName();
      }
    }
    return name;
  }
}

let points = [{name: '鈴木', point: 80}, {name: '田中', point: 92}, {name: '佐藤', point: 75}];
let pointCalculator = PointCalculator.valueOf(points);

console.log(pointCalculator.sumPoint()); // 合計 247
console.log(pointCalculator.avePoint()); // 平均 82.33…
console.log(pointCalculator.maxPointName()); // 田中

pointCalculator.addResult(new Point('阿部', 95));

console.log(pointCalculator.sumPoint()); // 合計 342
console.log(pointCalculator.avePoint()); // 平均 85.5
console.log(pointCalculator.maxPointName()); // 阿部