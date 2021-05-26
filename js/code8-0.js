class Book {
  // 初期化時に使われるコンストラクタ
  constructor(title, pageSize) {
    this.title = title;
    this.pageSize = pageSize;
  }

  // 以下はクラス内の情報（プロパティや属性と呼ばれる）の操作

  // titleのゲッター
  getTitle() {
    return this.title;
  }

  // titleのセッター
  setTitle(value) {
    this.title = value;
  }

  // pageSizeのゲッター
  getPageSize() {
    return this.pageSize;
  }

  // pageSizeのセッター
  setPageSize(value) {
    this.pageSize = value;
  }
}

class DummyBook {
  getTitle() {
    return 'dummyTitle'
  }

  setTitle(value) {
    console.debug(`setTitle(${value})`);
  }

  getPageSize() {
    return -1
  }

  setPageSize(value) {
    console.debug(`setPageSize(${value})`);
  }
}

//let book = new DummyBook;
//let book = new Book('坊ちゃん', 123);

console.log(book.getTitle());
book.setTitle('吾輩は猫である');
console.log(book.getTitle());
console.log(book.getPageSize());
book.setPageSize(567);
console.log(book.getPageSize());

