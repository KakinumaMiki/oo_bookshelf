# 関数・メソッド
def sum_numbers(numbers) # numbersは引数。関数の外から値を渡せる
  size = 0 # 変数として sizeを定義して0で初期化
  # numbersの中身を順番に取り出してsizeに加算
  numbers.each do |number|
    size += number
  end
  size # 戻り値（一般的には return size と書いたりするがRubyは省略可能）
end

# 配列を指す変数を定義
numbers = [] # 変数として numbers を定義して空の配列で初期化
numbers.push(520) # 配列のpushメソッドを使って520を配列に追加
numbers.push(454)
numbers.push(876)

# 関数を呼び出して結果（戻り値の内容）をputsで表示
puts sum_numbers(numbers)

# 新たな値を追加します
numbers.push(11)
# 関数は何度も同じ処理を再利用できるように名前と処理を関連づけたものです
puts sum_numbers(numbers)