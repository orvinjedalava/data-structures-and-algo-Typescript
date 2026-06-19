import { describe, it, expect, test } from '@jest/globals';
import {
	mergeAlternately,
  gcdOfStrings

} from './leetcode-practice'

describe('mergeAlternately', () => {
	test('should merge "abc" and "pqr" to "apbqcr"', () => {
		const result = mergeAlternately("abc", "pqr");
		expect(result).toBe("apbqcr");
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