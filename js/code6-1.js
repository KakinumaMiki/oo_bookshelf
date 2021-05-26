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
  // 指定したハッシュの配列から初期の本棚を作り出す
  static valueOf(arrayOfHash) {
    // thisの型に関連している new が呼ばれます。
    // 今回のサンプルではnew LimitedBookshelfが呼ばれます。
    let bookshelf = new this;

    for (let i = 0; i < arrayOfHash.length; i++) {
      let hash = arrayOfHash[i];
      let book = new Book(hash.title, hash.pageSize);
      bookshelf.addBook(book);
    }
    return bookshelf;
  }

  constructor() {
    this.books = [];
  }

  addBook(book) {
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
    let size = 0;
    for(let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.books.length;
  }

  canAddBook(book) {
    return true;
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

  // 明示的にメソッドを書かれていませんがBookshelfのメソッドを呼び出すことができます。
  // 10行程度でほぼ同じ機能を持ちながら、少し動きの違う仕組みを導入できました。
}

// booksが通信の結果だったり、ファイルから読んだりするなど外部から与えられる想定
let books = [
  { title: "坊ちゃん", pageSize: 520 },
  { title: "我輩は猫である", pageSize: 454 },
  { title: "こころ", pageSize: 876 }
];

// valueOfはBookshelfで定義していますが、派生クラスのLimitedBookshelfでも使えます
let bookshelf = LimitedBookshelf.valueOf(books);

if(!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}

console.log(bookshelf.findBookByTitle("こころ"));
console.log(bookshelf.sumPageSize());

