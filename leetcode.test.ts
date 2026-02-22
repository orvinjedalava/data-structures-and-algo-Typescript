import { 
  mergeAlternately,
  gcdOfStrings
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