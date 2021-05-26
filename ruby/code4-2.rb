puts 'アクセス修飾子のサンプル'

class Test1
  def public_method
    puts '何もしなければpublicなのでクラスの外からアクセスできます'

    private_method1 # クラスの中からならアクセス可能
  end

  private

  def private_method1
    puts 'privateと書いた後に書かれたprivate_method1にはクラスの外からアクセスできません'
  end

  def private_method2
    puts 'privateと書いた後に書かれたprivate_method2にはクラスの外からアクセスできません'
  end
end

test1 = Test1.new
test1.public_method
# 何もしなければpublicなのでクラスの外からアクセスできます
# privateと書いた後に書かれたprivate_method1にはクラスの外からアクセスできません

test1.private_method2
# Traceback (most recent call last):
# code4-2.rb:26:in `<main>': private method `private_method2' called for #<Test1:0x00007fb93380f428> (NoMethodError)
# Did you mean?  private_methods

