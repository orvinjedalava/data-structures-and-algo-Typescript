import { mergeAlternately } from './leetcode';

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