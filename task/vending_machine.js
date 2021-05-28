// 商品の情報を扱うクラス
class Item {
  // #productName
  // #price

  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }

  getProductName() {
    return this.productName;
    // return this.#productName;
  }

  getPrice() {
    return this.price;
    // return this.#price;
  }
}

class VendingMachine {
  #items
  #price
  
  // 商品の初期登録
  static valueOf(arrayOfHash) {
    let vendingMachine = new this;
    
    for (let i = 0; i < arrayOfHash.length; i++){
      let hash = arrayOfHash[i];
      let items = new Item(hash.productName, hash.price);
      vendingMachine.addItem(items);
    }
    return vendingMachine;
  }
  
  constructor() {
    this.#items = [];
  }
  // 初期商品の補充 
  addItem(item) {
    this.#items.push(item);
  }

  // 商品検索
  // findItembyName(name) {
  //   for(let i = 0; i < this.#items.length; i++) {
  //     if(this.#items[i].getProductName() === name) {
  //       console.log('一緒！');
  //       console.log(this.#items[i]);
  //       return this.#items[i]
  //     }
  //   }
  //   return null;
  // }

  // 商品の補充
  restockItem(name, num) {
    for(let i = 0; i < this.#items.length; i++) {
      if(this.#items[i].getProductName() === name) {
        console.log('一緒！');
        console.log(this.#items[i]);
        for(let j = 0; j < num; j++){
          this.addItem(this.#items[i]);
        }
        break;
      }
    }
  }

  // 商品の購入 戻り値Item
  buy(productName, cash) {
    if(this.canBuy(productName)) {
      console.log('購入の方:'+this.#price);
      if (this.#price <= cash) {
        console.log('買えるよ！');
      } else {
        console.log('買えないよ！')
        // 例外
      }
    } else {
      // 例外
    }
  }
  // 商品の在庫チェック 戻り値boolean
  canBuy(productName) {
    for(let i = 0; i < this.#items.length; i++) {
      if(this.#items[i].getProductName() === productName) {
        this.#price = this.#items[i].getPrice();
        console.log(this.#price);
        return true;
      }
    }
    return false;
  }


  // 確認用
  getValue(){
    console.log(this.#items);
  }
}

// 初期商品
let items = [
  {productName: 'コーラ', price: 120},
  {productName: '水', price: 100},
  {productName: 'お茶', price: 110}
];

let vendingMachine = VendingMachine.valueOf(items);
vendingMachine.getValue();
vendingMachine.restockItem('コーラ', 2); // 商品の補充
vendingMachine.getValue();
vendingMachine.buy('コーラ', 130); // 商品の購入
if(vendingMachine.canBuy('水')){
  console.log('買える');
} else {
  console.log('買えない')
}; // 商品の在庫チェック
vendingMachine.buy('コーラ', 100);