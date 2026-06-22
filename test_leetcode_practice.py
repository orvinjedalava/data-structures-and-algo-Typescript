from leetcode_practice import (
    merge_alternately,
    gcd_of_strings,
    kids_with_candies,
    can_place_flowers,
    reverse_vowels,
    reverse_words,
    product_except_self
)

def test_merge_alternately_basic():
    assert merge_alternately("abc", "pqr") == "apbqcr"

def test_gcd_of_strings_cases():
    assert gcd_of_strings("ABCABC", "ABC") == "ABC"
    assert gcd_of_strings("ABABAB", "AB") == "AB"
    assert gcd_of_strings("LEET", "CODE") == ""
    assert gcd_of_strings("AAAAB", "AAA") == ""

def test_kids_with_candies_cases():
    assert kids_with_candies([2, 3, 5, 1, 3], 3) == [True, True, True, False, True]
    assert kids_with_candies([4, 2, 1, 1, 2], 1) == [True, False, False, False, False]
    assert kids_with_candies([12, 1, 12], 10) == [True, False, True]

def test_can_place_flowers_cases():
    assert can_place_flowers([1, 0, 0, 0, 1], 1) is True
    assert can_place_flowers([1, 0, 0, 0, 1], 2) is False

def test_reverse_vowels_cases():
    assert reverse_vowels("IceCreAm") == "AceCreIm"
    assert reverse_vowels("leetcode") == "leotcede"

def test_reverse_words_cases():
    assert reverse_words("the sky is blue") == "blue is sky the"
    assert reverse_words("   hello world   ") == "world hello"
    assert reverse_words("a good   example") == "example good a"

def test_product_except_self_cases():
    assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
    assert product_except_self([-1, 1, 0, -3, 3]) == [0, 0, 9, 0, 0]