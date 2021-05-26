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

// 本の情報を整形して出力できるクラス。extendsに続けて継承元のクラスの名前を書く。
class UIBook extends Book {
  getDecoratedTitle() {
    return `${this.title}(${this.pageSize})`;
  }
}

// 本の情報をJSONで出力できるクラス。extendsに続けて継承元のクラスの名前を書く。
class JsonableBook extends Book {
  constructor(title, pageSize) {
    super(title, pageSize);
    this.created_at = new Date();
  }

  toJonString() {
    return JSON.stringify({ title: this.title, pageSize: this.pageSize, created_at: this.created_at });
  }
}

let books = [];

let uibook = new UIBook();
uibook.setTitle('友情');
uibook.setPageSize(489);
books.push(uibook);

let jbook = new JsonableBook('みだれ髪', 290);
books.push(jbook);

//データを集計する処理（本来は結果をファイルに書き出すなどすると思ってください）
let csvData = [];
csvData.push(['タイトル', 'ページ数', '拡張情報']);

for(let i = 0; i < books.length; i++) {
  let book = books[i];

  let record = [book.getTitle(), book.getPageSize()];

  // 以下のif文は煩雑。できれば無くしてしまいたい。
  if(book instanceof UIBook) {
    record.push(book.getDecoratedTitle());
  }
  if(book instanceof JsonableBook) {
    record.push(book.toJonString());
  }

  csvData.push(record);
}

console.log(csvData);
