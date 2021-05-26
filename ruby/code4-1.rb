# クラス変数
puts 'クラス変数のサンプル'
class Test2
  @@value = 0 # この変数は全てのTest2クラスのインスタンスで共通
  def initialize
    @@value += 1 # インスタンスがnewされる時に数を一つ増やす
    puts "インスタンスの数: #{@@value}"
  end
end

test21 = Test2.new # インスタンスの数: 1
test22 = Test2.new # インスタンスの数: 2
test23 = Test2.new # インスタンスの数: 3

# グローバル変数
puts 'グローバル変数のサンプル'
$global_value = 1

def change_global_value
  $global_value += 1
  puts "$global_valueの数: #{$global_value}"
end

class Test3
  def change_global_value
    $global_value += 10
    puts "$global_valueの数: #{$global_value}"
  end
end

change_global_value # $global_valueの数: 2
change_global_value # $global_valueの数: 3
test3 = Test3.new
test3.change_global_value # $global_valueの数: 13
