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
}

let nekoden = new Book("我輩は猫である", 0);

// 以下の2つはエラーになります。アクセスできません。
// console.log(book.#title); // => SyntaxError: Private field '#title' must be declared in an enclosing class
// console.log(book.#pageSize); // => SyntaxError: Private field '#pageSize' must be declared in an enclosing class

nekoden.setPageSize(454);
console.log(nekoden.getTitle());
console.log(nekoden.getPageSize());