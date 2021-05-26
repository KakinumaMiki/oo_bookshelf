class ImmutableBook {
  #title
  #pageSize

  constructor(title, pageSize) {
    this.#title = title;
    this.#pageSize = pageSize;
  }

  getTitle() {
    return this.#title;
  }

  getPageSize() {
    return this.#pageSize;
  }

  toJSON() {
    return { title: this.#title, pageSize: this.#pageSize };
  }
}

class Bookshelf {
  #books
  
  constructor(books) {
    this.#books = books; // 厳密には危険
  }

  addBook(book) {
    this.#books.push(book);
  }

  findBookByTitle(title) {
    for(let i = 0; i < this.#books.length; i++) {
      if (this.#books[i].getTitle() === title) return this.#books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0;
    for(let i = 0; i < this.#books.length; i++) {
      size += this.#books[i].getPageSize();
    }
    return size;
  }

  getBooks() {
    return this.#books; // 厳密には危険
  }
}

let books = [];
let bookshelf = new Bookshelf(books);

bookshelf.addBook(new ImmutableBook("坊ちゃん", 520));
bookshelf.addBook(new ImmutableBook("我輩は猫である", 454));
bookshelf.addBook(new ImmutableBook("こころ", 876));

// こんな変更ができてしまいます。
// 1. Bookshelfに渡したbooksを直接操作
books.splice(0, books.length - 1); // 最後の一つを残して全部消す!!
console.log(JSON.stringify(bookshelf.getBooks())); // => [{"title":"こころ","pageSize":876}]

// 2. Bookshelfから取り出したbooksを直接操作
let innnerBooks = bookshelf.getBooks();
books.splice(0, books.length); // 全部消す!!
console.log(JSON.stringify(bookshelf.getBooks())); // => []
