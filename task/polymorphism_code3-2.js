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
  constructor() {
    this.books = [];
  }

  addBook(book) {
    // 自分自身（this）のcanAddBookメソッドを呼び出す
    if (!this.canAddBook(book)) return false;

    this.books.push(book);
    return true;
  }

  findBookByTitle(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) return this.books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0
    for (let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.books.length;
  }

  // 今この本を追加できますか？」というチェックを行えるメソッド
  canAddBook(book) {
    return true; // デフォルトでは何も制限を行わないのでどんな時も本を追加できる
  }
}

// 格納できる本の数が指定できる本棚クラス
class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super(); // 親のconstructorを呼びます
    this.maxSize = maxSize;
  }

  // 親クラスが作っているメソッドを上書き（オーバーライド）できます。
  canAddBook(book) {
    return this.books.length < this.maxSize;
  }
}


// 細かいログを出してくれる本棚として本を格納するクラス
class DebugBookshelf extends LimitedBookshelf {
  constructor(maxSize = 3) {
    super();
  }

  addBook(book) {
    const addBook = super.addBook(book);
    console.debug(`addBook(引数: ${JSON.stringify(book)}, 戻り値: ${addBook})`);
    return addBook;
  }

  findBookByTitle(title) {
    const book = super.findBookByTitle(title);
    console.debug(`findBookByTitle(引数: ${title}, 戻り値: ${JSON.stringify(book)})`);
    return book;
  }

  canAddBook(book) {
    const canAddBook = super.canAddBook(book);
    console.debug(`canAddBook(引数: ${JSON.stringify(book)}, 戻り値: ${canAddBook})`);
    return canAddBook;
  }
}

// 環境変数を利用してインスタンス化するクラスを変えるメソッド
function createBook() {
  if (process.env.NODE_ENV == 'development') {
    return new DebugBookshelf();
  } else {
    return new LimitedBookshelf();
  }
}
// console.log(process.env.NODE_ENV); // 確認用
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
// $ NODE_ENV=development node polymorphism_code3-2.js
// canAddBook(引数: {"title":"坊ちゃん","pageSize":520}, 戻り値: true)
// addBook(引数: {"title":"坊ちゃん","pageSize":520}, 戻り値: true)
// canAddBook(引数: {"title":"我輩は猫である","pageSize":454}, 戻り値: true)
// addBook(引数: {"title":"我輩は猫である","pageSize":454}, 戻り値: true)
// canAddBook(引数: {"title":"こころ","pageSize":876}, 戻り値: true)
// addBook(引数: {"title":"こころ","pageSize":876}, 戻り値: true)
// canAddBook(引数: {"title":"門","pageSize":345}, 戻り値: false)
// addBook(引数: {"title":"門","pageSize":345}, 戻り値: false)
// 新しい本を追加できませんでした。今の本の数: 3
// findBookByTitle(引数: こころ, 戻り値: {"title":"こころ","pageSize":876})
// Book { title: 'こころ', pageSize: 876 }
// 1850

// -- 本番稼働時 --
// $ node polymorphism_code3-2.js
// 新しい本を追加できませんでした。今の本の数: 3
// Book { title: 'こころ', pageSize: 876 }
// 1850