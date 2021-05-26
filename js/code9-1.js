// 本の情報を扱うクラス
class Book {
  #title
  #pageSize
  constructor(title, pageSize) {
    this.#title = title;
    this.#pageSize = pageSize;
  }

  getTitle() {
    return this.#title;
  }

  setTitle(value) {
    this.#title = value;
  }

  getPageSize() {
    return this.#pageSize;
  }

  setPageSize(value) {
    this.#pageSize = value;
  }

  toJSON() {
    return { title: this.#title, pageSize: this.#pageSize }
  }
}

// 本棚として本を格納するクラスの基底クラス
class Bookshelf {
  #books
  constructor() {
    this.#books = [];
  }

  addBook(book) {
    // 自分自身（this）のcanAddBookメソッドを呼び出す
    if (!this.canAddBook(book)) return false;

    this.#books.push(book);
    return true;
  }

  findBookByTitle(title) {
    for(let i = 0; i < this.#books.length; i++) {
      if (this.#books[i].getTitle() === title) return this.#books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0
    for(let i = 0; i < this.#books.length; i++) {
      size += this.#books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.#books.length;
  }

  // 今この本を追加できますか？」というチェックを行えるメソッド
  canAddBook(book) {
    return true; // デフォルトでは何も制限を行わないのでどんな時も本を追加できる
  }
}

// 格納できる本の数が指定できる本棚クラスのデコレーター
// Bookshelfを継承しませんが、ダックタイピングの為に同じメソッドを持ちます。
class LimitedBookshelfDecorator {
  #bookshelf
  #maxSize

  constructor(bookshelf, maxSize = 3) {
    this.#bookshelf = bookshelf;
    this.#maxSize = maxSize;
  }

  canAddBook(book) {
    return this.size() < this.#maxSize;
  }

  addBook(book) {
    if (!this.canAddBook(book)) return false;
    return this.#bookshelf.addBook(book);
  }

  // 以下は包含している #bookshelfに処理を移譲します

  findBookByTitle(title) {
    return this.#bookshelf.findBookByTitle(title);
  }

  sumPageSize() {
    return this.#bookshelf.sumPageSize();
  }

  size() {
    return this.#bookshelf.size();
  }
}

class DebugBookshelfDecorator {
  #bookshelf

  constructor(bookshelf) {
    this.#bookshelf = bookshelf;
  }

  canAddBook(book) {
    console.debug(`- canAddBook(${JSON.stringify(book)})`)
    return this.#bookshelf.canAddBook(book);
  }

  addBook(book) {
    console.debug(`- addBook(${JSON.stringify(book)})`)
    return this.#bookshelf.addBook(book);
  }

  findBookByTitle(title) {
    console.debug(`- findBookByTitle(${title})`)
    return this.#bookshelf.findBookByTitle(title);
  }

  sumPageSize() {
    console.debug(`- sumPageSize()`)
    return this.#bookshelf.sumPageSize();
  }

  size() {
    console.debug(`- size()`)
    return this.#bookshelf.size();
  }
}

// 通常のBookshelfを作成し、それにLimitedのデコレートを行う
let bookshelf = new LimitedBookshelfDecorator(new Bookshelf, 3);

bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

// 途中でさらにデコレートしてデバッグを有効にもできる。
bookshelf = new DebugBookshelfDecorator(bookshelf);

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}

console.log(JSON.stringify(bookshelf.findBookByTitle("こころ")));
console.log(bookshelf.sumPageSize());
