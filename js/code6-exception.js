// 本の情報を扱うクラス
class Book {
  constructor(title, pageSize) {
    // 想定外の引数で呼び出された場合には例外を投げる。
    if(title === null) { throw new Error('titleはnullではいけません'); }
    if(pageSize === null) { throw new Error('pageSizeはnullではいけません'); }

    this.title = title;
    this.pageSize = pageSize;
  }

  getTitle() {
    return this.title;
  }

  setTitle(value) {
    this.title = value;
  }

  getPageSize() {
    return this.pageSize;
  }

  setPageSize(value) {
    this.pageSize = value;
  }
}

try {
  let book = new Book('こころ', null); // この呼び出しは例外が投げられます。
  book.setPageSize(100); // 例外が投げられるので、この行には到達しません。
} catch(e) {
  // 例外が投げられた後ここに処理が続きます。
  console.log(e);
}

// 例外をcatchした後、続きのコードが実行されます。

function createBook(title, pageSize) {
  return new Book(title, pageSize);
}

let book;
try {
  book = createBook(null, 234); // 例外が発生すると関数をどんどん巻き戻して try を探します。
} catch(e) {
  // new Book -> createBook と巻き戻り、tryを見つけてここに入ってきます。
  book = new Book('ダミーブック', 0); //例外の場合に別の処理を用意することもできます。
}

// 例外をcatchした後、続きのコードが実行されます。
console.log(book);
