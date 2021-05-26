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

  toJsonString() {
    return JSON.stringify({ title: this.title, pageSize: this.pageSize, created_at: this.created_at });
  }
}

let uibook = new UIBook();
uibook.setTitle('友情'); // Bookのメソッドが使えます
uibook.setPageSize(489); // Bookのメソッドが使えます
console.log(uibook.getDecoratedTitle()); // UIBookで作ったメソッドが使えます

let jbook = new JsonableBook('みだれ髪', 290);
console.log(jbook.getTitle()) // Bookのメソッドが使えます
console.log(jbook.toJsonString()); // JsonableBookで作ったメソッドが使えます
