str = "This is string"
str2 = "This is another string"

puts str.upcase # => THIS IS STRING
puts str2.upcase # => THIS IS ANOTHER STRING

num = 123
puts num.upcase # undefined method `upcase' for 123:Integer (NoMethodError)
