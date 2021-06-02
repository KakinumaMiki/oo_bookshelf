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
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) return this.books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0;
    for (let i = 0; i < this.books.length; i++) {
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

// 貸し借りができる本棚
class RentalBookshelf extends Bookshelf {
  constructor() {
    super();
    this.rentalBooks = [];
  }

  // 指定の本を借りる
  rentBook(book) {
    let pos = this.books.findIndex(({ title }) => title === book.getTitle());
    if (pos === -1) {
      console.log('指定された本は貸出中です');
    } else {
      // 本棚から削除
      this.books.splice(pos, 1);
      // 貸出リストに追加
      this.rentalBooks.push(book);
    }
  }

  // 指定の本を返す
  returnBook(book) {
    const pos = this.rentalBooks.findIndex(({ title }) => title === book.getTitle());
    this.rentalBooks.splice(pos, 1);
    this.books.push(book);
  }

  // 貸し出されている本の一覧を取得
  listRentedBooks() {
    if (this.rentalBooks.length === 0) {
      console.log("貸し出されていません");
    } else {
      console.log(this.rentalBooks);
    }
  }

  // 指定の本が貸出中か調べる。貸出中なら真、さもなくば偽
  isRented(book) {
    let result = false;
    this.rentalBooks.some((item) => {
      if (item.title === book.getTitle()) {
        result = true;
      }
    })
    return result;
  }
}

// 初期の本棚
let books = [
  { title: "坊ちゃん", pageSize: 520 },
  { title: "我輩は猫である", pageSize: 454 },
  { title: "こころ", pageSize: 876 }
];

// 動作サンプル
let bookshelf = RentalBookshelf.valueOf(books);

bookshelf.rentBook(new Book("坊ちゃん", 520));
bookshelf.listRentedBooks(); // "坊ちゃん"
if (bookshelf.isRented(new Book("我輩は猫である", 454))) {
  console.log("貸出中です");
} else {
  console.log("本棚にあります");
} // 本棚にあります
bookshelf.rentBook(new Book("我輩は猫である", 454));
bookshelf.listRentedBooks(); // "坊ちゃん" "我輩は猫である"
if (bookshelf.isRented(new Book("我輩は猫である", 454))) {
  console.log("貸出中です");
} else {
  console.log("本棚にあります");
} // 貸出中です
bookshelf.rentBook(new Book("我輩は猫である", 454)); // 指定された本は貸出中です
bookshelf.returnBook(new Book("我輩は猫である", 454));
bookshelf.returnBook(new Book("坊ちゃん", 520));
bookshelf.listRentedBooks(); // 貸し出されていません

