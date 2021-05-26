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
    this.books = []; // 配列で実装されている
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

  // 明示的にメソッドを書かれていませんがBookshelfのメソッドを呼び出すことができます。
  // 10行程度でほぼ同じ機能を持ちながら、少し動きの違う仕組みを導入できました。
}

// 本棚として本を格納するクラス（タイトルでの検索が速い）
class IndexedBookshelf {
  constructor() {
    this.books = {}; // 連想配列で実現されている
  }

  addBook(book) {
    if (!this.canAddBook(book)) return false;

    this.books[book.title] = book;
    return true;
  }

  findBookByTitle(title) {
    return this.books[title]; // この実装ならtitleが合致するものを一瞬で取り出せます
  }

  sumPageSize() {
    let size = 0;
    for(let title in this.books) {
      size += this.books[title].pageSize;
    }
    return size;
  }

  canAddBook(book) {
    return true; // デフォルトでは何も制限を行わないのでどんな時も本を追加できる
  }
}

// サンプルの操作です。この中のコードは決まっているものとします。
function sample(bookshelf) {
  bookshelf.addBook(new Book("坊ちゃん", 520));
  bookshelf.addBook(new Book("我輩は猫である", 454));
  bookshelf.addBook(new Book("こころ", 876));

  if (!bookshelf.addBook(new Book("門", 345))) {
    console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
  }

  console.log(bookshelf.findBookByTitle("こころ"));
  console.log(bookshelf.sumPageSize());
}

sample(new Bookshelf); // 内部が配列になっているBookshelfでサンプルを動かす
sample(new LimitedBookshelf); // 内部が配列になっているLimitedBookshelfでサンプルを動かす
sample(new IndexedBookshelf); // 内部が連想配列になっているIndexedBookshelfでサンプルを動かす
