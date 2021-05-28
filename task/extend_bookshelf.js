// 本の情報を扱うクラス
class Book {
  // 初期化時に使われるコンストラクタ
  constructor(title, pageSize) {
    this.title = title;
    this.pageSize = pageSize;
  }

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
    return true; // デフォルトでは何も制限を行わないのでどんな時も本を追加できる
  }
}

// “坊ちゃん”を追加する事ができない本棚クラス
class RejectedBocchanBookshelf extends Bookshelf {
  constructor() {
    super(); // 親のconstructorを呼びます
  }

  // 親クラスが作っているメソッドを上書き（オーバーライド）できます。
  canAddBook(book) {
    return book.getTitle() !== '坊ちゃん';
  }
}

// 20ページ未満の本しか追加する事ができない本棚クラス
class ThinBookshelf extends Bookshelf {
  constructor(maxPageSize = 20) {
    super();
    this.maxPageSize = maxPageSize;
  }

  canAddBook(book) {
    return book.getPageSize() < this.maxPageSize;
  }
}
// c.「追加を拒否した回数」を取得するメソッドを持った`LimitedBookshelf` を作成しましょう
// 格納できる本の数が指定できる本棚クラス
class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super(); 
    this.maxSize = maxSize;
    this.rejectCount = 0;
  }

  canAddBook(book) {
    if (this.books.length >= this.maxSize) {
      this.rejectCount++;
    }
    return this.books.length < this.maxSize;
  }

  // 追加を拒否した回数の取得
  getRejectCount(){
    return this.rejectCount;

  }
}


// 出力
//坊ちゃんを拒否
let rejectedBocchanBookshelf = new RejectedBocchanBookshelf;
let Bocchan = new Book("坊ちゃん", 520);
if (!rejectedBocchanBookshelf.addBook(Bocchan)) {
  console.log(`新しい本を追加できませんでした。本のタイトル: ${Bocchan.getTitle()}`);
}
let neko = new Book("我輩は猫である", 454);
if (!rejectedBocchanBookshelf.addBook(neko)) {
  console.log(`新しい本を追加できませんでした。本のタイトル: ${neko.getTitle()}`);
}
let kokoro = new Book("こころ", 876);
if (!rejectedBocchanBookshelf.addBook(kokoro)) {
  console.log(`新しい本を追加できませんでした。本のタイトル: ${kokoro.getTitle()}`);
}
console.log(rejectedBocchanBookshelf.findBookByTitle("我輩は猫である"));
console.log(rejectedBocchanBookshelf.findBookByTitle("こころ"));
console.log('rejectedBocchanBookshelfの今の本の数: ' + rejectedBocchanBookshelf.size());

// 20ページ未満を拒否
let thinBookshelf = new ThinBookshelf;
let book20 = new Book("20ページの本", 20);
if (!thinBookshelf.addBook(book20)) {
  console.log(`新しい本を追加できませんでした。本のサイズ: ${book20.getPageSize()}`);
}
let book19 = new Book("19ページの本", 19);
if (!thinBookshelf.addBook(book19)) {
  console.log(`新しい本を追加できませんでした。本のサイズ: ${book19.getPageSize()}`);
}
console.log(thinBookshelf.findBookByTitle("19ページの本"));
console.log('thinBookshelfの今の本の数: ' + thinBookshelf.size());

// 拒否した回数を表示
let bookshelf = new LimitedBookshelf;
bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}
console.log(`追加を拒否した回数： ${bookshelf.getRejectCount()}`);