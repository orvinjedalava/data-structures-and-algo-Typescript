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


def kids_with_candies(candies: list[int], extra_candies: int) -> list[bool]:
    max_candies = max(candies)
    result = [False] * len(candies)

    for i in range(len(candies)):
        result[i] = candies[i] + extra_candies >= max_candies

    return result


def can_place_flowers(flowerbed: list[int], n: int) -> bool:
    if n == 0:
        return True

    planted = 0

    for i in range(len(flowerbed)):
        if flowerbed[i] == 0:
            left_empty = i == 0 or flowerbed[i - 1] == 0
            if not left_empty:
                continue

            right_empty = i == len(flowerbed) - 1 or flowerbed[i + 1] == 0
            if not right_empty:
                continue

            flowerbed[i] = 1
            planted += 1

            if planted >= n:
                return True

    return planted >= n


def reverse_vowels(s: str) -> str:
    vowels = set("aeiouAEIOU")
    chars = list(s)
    left = 0
    right = len(chars) - 1

    while left < right:
        if chars[left] in vowels and chars[right] in vowels:
            chars[left], chars[right] = chars[right], chars[left]
            left += 1
            right -= 1

        if left < right and chars[left] not in vowels:
            left += 1

        if left < right and chars[right] not in vowels:
            right -= 1

    return "".join(chars)


def reverse_words(s: str) -> str:
    return " ".join(s.split()[::-1])


def product_except_self(nums: list[int]) -> list[int]:
    n = len(nums)
    answer = [1] * n

    prefix = 1
    for i in range(n):
        answer[i] = prefix
        prefix *= nums[i]

    suffix = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]

    return answer


def increasing_triplet(nums: list[int]) -> bool:
    first = float("inf")
    second = float("inf")

    for num in nums:
        if num <= first:
            first = num
        elif num <= second:
            second = num
        else:
            return True

    return False


def compress(chars: list[str]) -> int:
    write = 0
    read = 0

    while read < len(chars):
        current_char = chars[read]
        count = 0

        while read < len(chars) and chars[read] == current_char:
            read += 1
            count += 1

        chars[write] = current_char
        write += 1

        if count > 1:
            for digit in str(count):
                chars[write] = digit
                write += 1

    return write


def move_zeroes(nums: list[int]) -> None:
    write = 0

    for read in range(len(nums)):
        if nums[read] != 0:
            nums[write], nums[read] = nums[read], nums[write]
            write += 1


def is_subsequence(s: str, t: str) -> bool:
    i = 0
    j = 0

    while i < len(s) and j < len(t):
        if s[i] == t[j]:
            i += 1
        j += 1

    return i == len(s)


def max_area(height: list[int]) -> int:
    left = 0
    right = len(height) - 1
    best_area = 0

    while left < right:
        width = right - left
        container_height = min(height[left], height[right])
        area = width * container_height

        if area > best_area:
            best_area = area

        if height[left] <= height[right]:
            left += 1
        else:
            right -= 1

    return best_area