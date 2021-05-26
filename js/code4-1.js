// グローバル変数
console.log('グローバル変数のサンプル');
globalValue = 1;

function changeGlobalValue() {
  globalValue += 1;
  console.log(`globalValueの数: ${globalValue}`);
}

class Test3 {
  changeGlobalValue() {
    globalValue += 10;
    console.log(`globalValueの数: ${globalValue}`);
  }
}

changeGlobalValue(); // globalValueの数: 2
changeGlobalValue(); // globalValueの数: 3
let test3 = new Test3;
test3.changeGlobalValue(); // globalValueの数: 13
