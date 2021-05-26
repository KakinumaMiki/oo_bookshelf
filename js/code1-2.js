function sumPageSize(books) {
  let size = 0;
  for(let i = 0; i < books.length; i++) {
    size += books[i].pageSize;
  }
  return size;
}

function findBookByTitle(books, title) {
  for(let i = 0; i < books.length; i++) {
    if (books[i].title === title) return books[i];
  }
  return null;
}

let books = [];
books.push({ title: "坊ちゃん", pageSize: 520 });
books.push({ title: "我輩は猫である", pageSize: 454 });
books.push({ title: "こころ", pageSize: 876 });

console.log(sumPageSize(books));
console.log(findBookByTitle(books, "こころ"));
