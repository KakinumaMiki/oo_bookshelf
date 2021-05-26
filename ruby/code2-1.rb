def find_book_by_title(books, title)
  books.each do |book|
    return book if title == book[:title]
  end
  nil
end

def sum_page_size(books)
  size = 0
  books.each do |book|
    size += book[:page_size]
  end
  size
end

def create_book(title, page_size)
  { title: title, page_size: page_size }
end

books = []
books.push(create_book("坊ちゃん", 520))
books.push(create_book("我輩は猫である", 454))
books.push(create_book("こころ", 876))

books[0][:page_Size] = 521 # 本当は page_size を増やしたかったのに間違った答えがシレッと出てくる...

p find_book_by_title(books, "こころ")
puts sum_page_size(books)
