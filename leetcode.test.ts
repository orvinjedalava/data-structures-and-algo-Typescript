import { 
  mergeAlternately,
  gcdOfStrings,
  kidsWithCandies,
  canPlaceFlowers,
  reverseVowels,
  reverseWords,
  productExceptSelf
} from './leetcode';

describe('mergeAlternately', () => {
  test('should merge "abc" and "pqr" to "apbqcr"', () => {
    const result = mergeAlternately("abc", "pqr");
    expect(result).toBe("apbqcr");
  });

  test('should handle words of different lengths', () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });

  test('should handle empty strings', () => {
    expect(mergeAlternately("", "pqr")).toBe("pqr");
    expect(mergeAlternately("abc", "")).toBe("abc");
    expect(mergeAlternately("", "")).toBe("");
  });
});

describe('gcdOfStrings', () => {
  test('should return "ABC" for "ABCABC" and "ABC"', () => {
    const result = gcdOfStrings("ABCABC", "ABC");
    expect(result).toBe("ABC");
  });
  test('should return "AB" for "ABABAB" and "AB"', () => {
    const result = gcdOfStrings("ABABAB", "AB");
    expect(result).toBe("AB");
  });
  test('should return "" for "LEET" and "CODE"', () => {
    const result = gcdOfStrings("LEET", "CODE");
    expect(result).toBe("");
  })
  test('should return "" for "AAAAAB" and "AAA"', () => {
    const result = gcdOfStrings("AAAAB", "AAA");
    expect(result).toBe("");
  })
});

describe('kidsWithCandies', () => {
  test('should return [true,true,true,false,true] for candies [2,3,5,1,3] and extraCandies 3', () => {
    const result: boolean[] = kidsWithCandies([2,3,5,1,3], 3);
    expect(result).toEqual([true, true, true, false, true]);
  });
  test('should return [true,false,false,false,false] for candies [4,2,1,1,2] and extraCandies 1', () => {
    const result: boolean[] = kidsWithCandies([4,2,1,1,2], 1);
    expect(result).toEqual([true, false, false, false, false]);
  });
  test('should return [true,false,true] for candies [12,1,12] and extraCandies = 10', () => {
    const result: boolean[] = kidsWithCandies([12,1,12], 10);
    expect(result).toEqual([true, false, true]);
  })
});

describe('canPlaceFlowers', () => {
  test('should return true for flowerbed [1,0,0,0,1] and n = 1', () => {
    const result = canPlaceFlowers([1,0,0,0,1], 1);
    expect(result).toBe(true);
  });
  test('should return false for flowerbed [1,0,0,0,1] and n = 2', () => {
    const result = canPlaceFlowers([1,0,0,0,1], 2);
    expect(result).toBe(false);
  })
});

describe('reverseVowels', () => {
  test('should return "AceCreIm" for s "IceCreAm"', () => {
    const result = reverseVowels("IceCreAm");
    expect(result).toBe("AceCreIm");
  });
  test('should return "leotcede" for s "leetcode"', () => {
    const result = reverseVowels("leetcode");
    expect(result).toBe("leotcede");
  });
});

describe('reverseWords', () => {
  test('should return "blue is sky the" for s "the sky is blue"', () => {
    const result = reverseWords("the sky is blue");
    expect(result).toBe("blue is sky the");
  });
  test('should return "world hello" for s "   hello world   "', () => {
    const result = reverseWords("   hello world   ");
    expect(result).toBe("world hello");
  });
  test('should return "example good a" for s "a good   example"', () => {
    const result = reverseWords("a good   example");
    expect(result).toBe("example good a");
  });
});

describe('productExceptSelf', () => {
  test('should return [24,12,8,6] from nums [1,2,3,4]', () => {
    const result = productExceptSelf([1,2,3,4]);
    expect(result).toEqual([24,12,8,6]);
  });
  test('should return [0,0,9,0,0] from nums [-1,1,0,-3,3]', () => {
    const result = productExceptSelf([-1,1,0,-3,3]);
    expect(result).toEqual([0,0,9,0,0]);
  });
});