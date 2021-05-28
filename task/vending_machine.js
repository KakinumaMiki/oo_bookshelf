// 商品の情報を扱うクラス
class Item {

  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }

  getProductName() {
    return this.productName;
  }

  getPrice() {
    return this.price;
  }
}

class VendingMachine {
  #items
  #price
  #index
  
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
  // 商品の補充 
  addItem(item) {
    this.#items.push(item);
  }

  // 商品の購入 戻り値Item
  buy(productName, cash) {
    if(this.canBuy(productName)) {
      if (this.#price <= cash) {
        let buyItem = this.#items[this.#index];
        this.#items.splice(this.#index, 1);
        return buyItem;
      } else {
        throw new Error('cashが商品の価格を下回りました');
      }
    } else {
      throw new Error('在庫が0件です');
    }
  }

  // 商品の在庫チェック 戻り値boolean
  canBuy(productName) {
    for(let i = 0; i < this.#items.length; i++) {
      if(this.#items[i].getProductName() === productName) {
        this.#price = this.#items[i].getPrice();
        this.#index = i;
        return true;
      }
    }
    return false;
  }

  // 確認用
  // getValue(){
  //   console.log(this.#items);
  // }
}

// 初期商品
let items = [
  {productName: 'コーラ', price: 120},
  {productName: '水', price: 100},
  {productName: 'お茶', price: 110}
];

let vendingMachine = VendingMachine.valueOf(items);
vendingMachine.addItem(new Item('オレンジ', 130)); // 商品の補充
// vendingMachine.getValue(); // 確認用
if(vendingMachine.canBuy('水')){
  console.log('在庫があるので買えます');
} else {
  console.log('在庫がないので買えません')
}; // 商品の在庫チェック => 在庫があるので買えます

try {
  console.log(vendingMachine.buy('オレンジ', 90)); // 商品の購入
} catch(e) {
  console.log(e); // => cashが商品の価格を下回りました
}

try {
  console.log(vendingMachine.buy('オレンジ', 130)); // 商品の購入 => Item { productName: 'オレンジ', price: 130 }
} catch(e) {
  console.log(e);
}

try {
  console.log(vendingMachine.buy('オレンジ', 140)); // 商品の購入
} catch(e) {
  console.log(e); // => 在庫が0件です
}