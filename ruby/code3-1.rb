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

# 本棚として本を格納するクラスの基底クラス
class Bookshelf
  def initialize
    @books = []
  end

  def add_book(book)
    # 自分自身（self）のcan_add_book?メソッドを呼び出す
    unless self.can_add_book?(book)
      return false
    end

    @books << book
    true
  end

  def find_book_by_title(title)
    @books.each do |book|
      return book if title == book.title
    end
    nil
  end

  def sum_page_size
    size = 0
    @books.each do |book|
      size += book.page_size
    end
    size
  end

  def size
    @books.size
  end

  # 今この本を追加できますか？」というチェックを行えるメソッド
  def can_add_book?(book)
    true # デフォルトでは何も制限を行わないのでどんな時も本を追加できる
  end
end

# 格納できる本の数が指定できる本棚クラス
class LimitedBookshelf < Bookshelf
  def initialize(max_size = 3)
    super() # 親のinitializeを呼びます
    @max_size = max_size
  end

  # 親クラスが作っているメソッドを上書き（オーバーライド）できます。
  def can_add_book?(book)
    @books.size < @max_size
  end

  # 明示的にメソッドを書かれていませんがBookshelfのメソッドを呼び出すことができます。
  # 10行程度でほぼ同じ機能を持ちながら、少し動きの違う仕組みを導入できました。
end

bookshelf = LimitedBookshelf.new

bookshelf.add_book(Book.new("坊ちゃん", 520))
bookshelf.add_book(Book.new("我輩は猫である", 454))
bookshelf.add_book(Book.new("こころ", 876))

if !bookshelf.add_book(Book.new("門", 345))
  puts "新しい本を追加できませんでした。今の本の数: #{bookshelf.size}"
end

p bookshelf.find_book_by_title("こころ")
puts bookshelf.sum_page_size
