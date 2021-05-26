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

// メソッドを呼ぶと細かいログを出してくれるBook
class DebugBook extends Book {
  getTitle() {
    console.debug(`getTitle(): ${super.getTitle()}`);
    return super.getTitle();
  }

  setTitle(value) {
    console.debug(`setTitle(${value})`);
    super.setTitle(value);
  }

  getPageSize() {
    console.debug(`getPageSize(): ${super.getPageSize()}`);
    return super.getPageSize();
  }

  setPageSize(value) {
    console.debug(`setPageSize(${value})`);
    super.setPageSize(value);
  }
}

// 環境変数を利用してインスタンス化するクラスを変えるメソッド
function createBook(title, pageSize) {
  if(process.env.NODE_ENV == 'development') {
    return new DebugBook(title, pageSize); // 開発中はデバッグ用のログが出るクラスをインスタンス化
  } else {
    return new Book(title, pageSize); // 本番稼働中はログが出ないクラスをインスタンス化
  }
}

// 下記のように呼び出すとデバッグ時の動作です
// NODE_ENV=development node code8-3.js

console.log(process.env.NODE_ENV);

// 以下のコードは code2-2から変更していません。

let books = [];
let bocchan = createBook("坊ちゃん", 520); // クラスはnewで作成できる
books.push(bocchan);

let nekoden = createBook("我輩は猫である", 0);
nekoden.setPageSize(454); // セッターを使って値を設定することもできる
console.log(nekoden.getPageSize()); // ゲッターを使って値を取り出せる
books.push(nekoden);

books.push(createBook("こころ", 876));

console.log(findBookByTitle(books, "こころ"));
console.log(sumPageSize(books));

// -- 出力のサンプル --
// -- 開発時 --
// $ NODE_ENV=development node code8-3.js
// development
// setPageSize(454)
// getPageSize(): 454
// 454
// getTitle(): 坊ちゃん
// getTitle(): 我輩は猫である
// getTitle(): こころ
// DebugBook { title: 'こころ', pageSize: 876 }
// getPageSize(): 520
// getPageSize(): 454
// getPageSize(): 876
// 1850

// -- 本番稼働時 --
// $ node code8-3.js
// undefined
// 454
// Book { title: 'こころ', pageSize: 876 }
// 1850