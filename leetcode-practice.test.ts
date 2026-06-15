import { describe, it, expect, test } from '@jest/globals';
import {
	mergeAlternately

} from './leetcode-practice'

describe('mergeAlternately', () => {
	test('should merge "abc" and "pqr" to "apbqcr"', () => {
		const result = mergeAlternately("abc", "pqr");
		expect(result).toBe("apbqcr");
	});
});