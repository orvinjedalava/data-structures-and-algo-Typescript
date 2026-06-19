from leetcode_practice import (
    merge_alternately,
    gcd_of_strings
)

def test_merge_alternately_basic():
    assert merge_alternately("abc", "pqr") == "apbqcr"

def test_gcd_of_strings_cases():
    assert gcd_of_strings("ABCABC", "ABC") == "ABC"
    assert gcd_of_strings("ABABAB", "AB") == "AB"
    assert gcd_of_strings("LEET", "CODE") == ""
    assert gcd_of_strings("AAAAB", "AAA") == ""