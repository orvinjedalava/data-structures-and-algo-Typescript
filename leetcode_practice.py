from math import gcd

def merge_alternately(word1: str, word2: str) -> str:
    result: list[str] = []

    for i in range(max(len(word1), len(word2))):
        if i < len(word1):
            result.append(word1[i])
        if i < len(word2):
            result.append(word2[i])

    return "".join(result)

def gcd_of_strings(str1: str, str2: str) -> str:
    if str1 + str2 != str2 + str1:
        return ""

    gcd_length = gcd(len(str1), len(str2))
    return str1[:gcd_length]