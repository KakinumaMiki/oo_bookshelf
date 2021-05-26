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

# 本棚として本を格納するクラス
class Bookshelf
  def initialize
    @books = []
  end

  # 新しく本を追加する
  def add_book(book)
    @books << book
  end

  # タイトルを指定して本を取得する
  def find_book_by_title(title)
    @books.each do |book|
      return book if title == book.title
    end
    nil
  end

  # ページ数を全部合計する
  def sum_page_size
    size = 0
    @books.each do |book|
      size += book.page_size
    end
    size
  end
end

bookshelf = Bookshelf.new

bookshelf.add_book(Book.new("坊ちゃん", 520))
bookshelf.add_book(Book.new("我輩は猫である", 454))
bookshelf.add_book(Book.new("こころ", 876))

p bookshelf.find_book_by_title("こころ")
puts bookshelf.sum_page_size
