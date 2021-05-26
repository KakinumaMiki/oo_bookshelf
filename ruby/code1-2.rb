def sum_page_size(books)
  size = 0
  books.each do |book|
    size += book[:page_size]
  end
  size
end

def find_book_by_title(books, title)
  books.each do |book|
    return book if title == book[:title]
  end
  nil
end

books = []
books.push({ title: "坊ちゃん", page_size: 520 })
books.push({ title: "我輩は猫である", page_size: 454 })
books.push({ title: "こころ", page_size: 876 })

puts sum_page_size(books)
p find_book_by_title(books, "こころ")
