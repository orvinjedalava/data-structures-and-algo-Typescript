from leetcode import (
    merge_alternately,
    gcd_of_strings,
    kids_with_candies,
    can_place_flowers,
    reverse_vowels,
    reverse_words,
    product_except_self,
    increasing_triplet,
    compress,
    move_zeroes,
    is_subsequence,
    max_area,
)


def test_merge_alternately_basic():
    assert merge_alternately("abc", "pqr") == "apbqcr"


def test_merge_alternately_different_lengths():
    assert merge_alternately("ab", "pqrs") == "apbqrs"
    assert merge_alternately("abcd", "pq") == "apbqcd"


def test_merge_alternately_empty_strings():
    assert merge_alternately("", "pqr") == "pqr"
    assert merge_alternately("abc", "") == "abc"
    assert merge_alternately("", "") == ""


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


def test_increasing_triplet_cases():
    assert increasing_triplet([1, 2, 3, 4, 5]) is True
    assert increasing_triplet([5, 4, 3, 2, 1]) is False
    assert increasing_triplet([2, 1, 5, 0, 4, 6]) is True
    assert increasing_triplet([1, 1, 1, 1, 1, 1]) is False


def test_compress_cases():
    assert compress(["a", "a", "b", "b", "c", "c", "c"]) == 6
    assert compress(["a"]) == 1
    assert compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]) == 4


def test_move_zeroes_cases():
    nums = [0, 1, 0, 3, 12]
    move_zeroes(nums)
    assert nums == [1, 3, 12, 0, 0]

    nums = [0]
    move_zeroes(nums)
    assert nums == [0]


def test_is_subsequence_cases():
    assert is_subsequence("abc", "ahbgdc") is True
    assert is_subsequence("axc", "ahbgdc") is False


def test_max_area_cases():
    assert max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    assert max_area([1, 1]) == 1
    assert max_area([4, 3, 2, 1, 4]) == 16