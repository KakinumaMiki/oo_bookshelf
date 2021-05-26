# 本の情報を扱うクラス
class Book
  # 初期化時に使われるコンストラクタ
  def initialize(title, page_size)
    @title = title
    @page_size = page_size
  end

  # 以下はクラス内の情報（プロパティや属性と呼ばれる）の操作

  # titleのゲッター
  def title
    @title
  end

  # titleのセッター
  def title=(value)
    @title = value
  end

  # page_sizeのゲッター
  def page_size
    @page_size
  end

  # page_sizeのセッター
  def page_size=(value)
    @page_size = value
  end
end

def find_book_by_title(books, title)
  books.each do |book|
    return book if title == book.title
  end
  nil
end

def sum_page_size(books)
  size = 0
  books.each do |book|
    size += book.page_size
  end
  size
end

books = []
bocchan = Book.new("坊ちゃん", 520) # クラスはnewで作成できる
books.push(bocchan)

nekoden = Book.new("我輩は猫である", 0)
nekoden.page_size = 454 # セッターを使って値を設定することもできる
puts nekoden.page_size # ゲッターを使って値を取り出せる
books.push(nekoden)

books.push(Book.new("こころ", 876))

p find_book_by_title(books, "こころ")
puts sum_page_size(books)
