// 変更不可能な本
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
}

let book = new ImmutableBook("坊ちゃん", 520);

// 以下の2つはエラーになります。アクセスできません。
// console.log(book.#title); // => SyntaxError: Private field '#title' must be declared in an enclosing class
// console.log(book.#pageSize); // => SyntaxError: Private field '#pageSize' must be declared in an enclosing class

// もしも上記と同じことがしたければ以下のように呼べます。
console.log(book.getTitle());
console.log(book.getPageSize());

// つまりこのコードのBookクラスは、インスタンス化した後、値を変更することができません。
// プログラムのバグは値の変更の結果起こることが殆どなので、セッターの無いImmutableBookは
// これまで扱ってきたBookよりも堅牢です。