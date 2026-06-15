export function mergeAlternately(word1: string, word2: string): string {
	const result: string[] = [];

	const word1Length: number = word1.length;
	const word2Length: number = word2.length;

	for (let i: number = 0; i < Math.max(word1Length, word2Length); i++) {
		if (i < word1Length)
			result.push(word1[i]);
		if (i < word2Length)
			result.push(word2[i]);
	}

	return result.join('');
}