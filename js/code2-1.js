function findBookByTitle(books, title) {
  for(let i = 0; i < books.length; i++) {
    if (books[i].title === title) return books[i];
  }
  return null;
}

function sumPageSize(books) {
  let size = 0;
  for(let i = 0; i < books.length; i++) {
    size += books[i].pageSize;
  }
  return size;
}

function createBook(title, pageSize) {
  return { title: title, pageSize: pageSize };
}

let books = [];
books.push(createBook("坊ちゃん", 520));
books.push(createBook("我輩は猫である", 454));
books.push(createBook("こころ", 876));

books[0].page_size = 521; // 本当は pageSize を増やしたかったのに間違った答えがシレッと出てくる...

console.log(sumPageSize(books));
console.log(findBookByTitle(books, "こころ"));
