# frozen_string_literal: true

require 'test/unit/assertions'
include Test::Unit::Assertions

def snail(array)
  array.empty? ? [] : array.shift + snail(array.transpose.reverse)
end

assert_equal [1, 2, 3, 6, 9, 8, 7, 4, 5], snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 'snail function should return as expected argument'

=begin

Snail should iterate from this:
[1, 2, 3] -> [4, 5, 6] -> [7, 8, 9] ([1, 2, 3, 4, 5, 6, 7, 8, 9])
to this:
[1, 2, 3] -> [6, 9, 8] -> [7, 4, 5] ([1, 2, 3, 6, 9, 8, 7, 4, 5])

=end