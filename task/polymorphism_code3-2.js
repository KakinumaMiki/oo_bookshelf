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

// 本棚として本を格納するクラスの基底クラス
class Bookshelf {
  constructor(maxSize = 3) {
    this.books = [];
    this.maxSize = maxSize;
  }

  addBook(book) {
    // 自分自身（this）のcanAddBookメソッドを呼び出す
    if (!this.canAddBook(book)) return false;

    this.books.push(book);
    return true;
  }

  findBookByTitle(title) {
    for(let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) return this.books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0
    for(let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.books.length;
  }

  // 今この本を追加できますか？」というチェックを行えるメソッド
  canAddBook(book) {
    return this.books.length < this.maxSize;
  }
}


// 細かいログを出してくれる本棚として本を格納するクラス
class DebugBookshelf {
  constructor(maxSize = 3) {
    this.books = [];
    this.maxSize = maxSize;
  }

  addBook(book) {
    if (!this.canAddBook(book)) {
      console.debug(`addBook(引数: ${JSON.stringify(book)}, 戻り値: false)`)
      return false;
    }
    this.books.push(book);
    console.debug(`addBook(引数: ${JSON.stringify(book)}, 戻り値: true)`)
    return true;
  }

  findBookByTitle(title) {
    for(let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) {
        console.debug(`findBookByTitle(引数: ${title}, 戻り値: ${JSON.stringify(this.books[i])})`)
        return this.books[i];
      }
    }
    console.debug(`findBookByTitle(引数: ${title}, 戻り値: null)`)
    return null;
  }

  sumPageSize() {
    let size = 0
    for(let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.books.length;
  }

  canAddBook(book) {
    console.debug(`canAddBook(引数: ${JSON.stringify(book)}, 戻り値: ${this.books.length < this.maxSize})`);
    return this.books.length < this.maxSize;
  }
}

// 環境変数を利用してインスタンス化するクラスを変えるメソッド
function createBook() {
  if(process.env.NODE_ENV == 'development') {
    return new DebugBookshelf();
  } else {
    return new Bookshelf();
  }
}
console.log(process.env.NODE_ENV);
let bookshelf = createBook();

bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}

console.log(bookshelf.findBookByTitle("こころ"));
console.log(bookshelf.sumPageSize());

// -- 出力のサンプル --
// -- 開発時 --

// -- 本番稼働時 --
// $ node polymorphism_code3-2.js
// 新しい本を追加できませんでした。今の本の数: 3
// Book { title: 'こころ', pageSize: 876 }
// 1850