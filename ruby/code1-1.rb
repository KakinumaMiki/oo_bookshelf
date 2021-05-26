def sum_page_size(books)
  size = 0
  books.each do |book|
    # 取り出した連想配列からpage_sizeを取得して加算
    size += book[:page_size]
  end
  size
end

books = []
# 連想配列で情報の塊を配列に格納
books.push({ title: "坊ちゃん", page_size: 520 })
books.push({ title: "我輩は猫である", page_size: 454 })
books.push({ title: "こころ", page_size: 876 })

puts sum_page_size(books)
