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
  # 指定したハッシュの配列から初期の本棚を作り出す
  def self.value_of(array_of_hash)
    # selfの型に関連している new が呼ばれます。
    # 今回のサンプルではLimitedBookshelf.newが呼ばれます。
    bookshelf = self.new

    array_of_hash.each do |hash|
      book = Book.new(hash[:title], hash[:page_size])
      bookshelf.add_book(book)
    end
    bookshelf
  end

  def initialize
    @books = []
  end

  def add_book(book)
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

  def can_add_book?(book)
    true
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


# booksが通信の結果だったり、ファイルから読んだりするなど外部から与えられる想定
books = [
  { title: "坊ちゃん", page_size: 520 },
  { title: "我輩は猫である", page_size: 454 },
  { title: "こころ", page_size: 876 }
]

# value_ofはBookshelfで定義していますが、派生クラスのLimitedBookshelfでも使えます
bookshelf = LimitedBookshelf.value_of(books)

if !bookshelf.add_book(Book.new("門", 345))
  puts "新しい本を追加できませんでした。今の本の数: #{bookshelf.size}"
end

p bookshelf.find_book_by_title("こころ")
puts bookshelf.sum_page_size
