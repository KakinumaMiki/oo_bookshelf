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

  // JSON.stringifyする時に下記のJSONが使われます
  toJSON() {
    return { title: this.#title, pageSize: this.#pageSize };
  }
}

class Bookshelf {
  #books
  
  constructor() {
    this.#books = [];
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
}

let bookshelf = new Bookshelf;

bookshelf.addBook(new ImmutableBook("坊ちゃん", 520));
bookshelf.addBook(new ImmutableBook("我輩は猫である", 454));
bookshelf.addBook(new ImmutableBook("こころ", 876));

console.log(JSON.stringify(bookshelf.findBookByTitle("こころ")));
console.log(bookshelf.sumPageSize());
