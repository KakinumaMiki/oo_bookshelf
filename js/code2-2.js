// 本の情報を扱うクラス
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

function findBookByTitle(books, title) {
  for(let i = 0; i < books.length; i++) {
    if (books[i].getTitle() === title) return books[i];
  }
  return null
}

function sumPageSize(books) {
  let size = 0;
  for(let i = 0; i < books.length; i++) {
    size += books[i].getPageSize();
  }
  return size;
}

let books = [];
let bocchan = new Book("坊ちゃん", 520); // クラスはnewで作成できる
books.push(bocchan);

let nekoden = new Book("我輩は猫である", 0);
nekoden.setPageSize(454); // セッターを使って値を設定することもできる
console.log(nekoden.getPageSize()); // ゲッターを使って値を取り出せる
books.push(nekoden);

books.push(new Book("こころ", 876));

console.log(findBookByTitle(books, "こころ"));
console.log(sumPageSize(books));
