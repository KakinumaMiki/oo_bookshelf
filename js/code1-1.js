function sumPageSize(books) {
  let size = 0;
  for(let i = 0; i < books.length; i++) {
    // 取り出した連想配列からpageSizeを取得して加算
    size += books[i].pageSize;
  }
  return size;
}

let books = [];
// 連想配列で情報の塊を配列に格納
books.push({ title: "坊ちゃん", pageSize: 520 });
books.push({ title: "我輩は猫である", pageSize: 454 });
books.push({ title: "こころ", pageSize: 876 });

console.log(sumPageSize(books));
