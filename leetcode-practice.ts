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

export function gcdOfStrings(str1: string, str2: string): string {
  
  // If concatenating in different orders gives different results,
  // there's no common divisor
  if (str1 + str2 !== str2 + str1) {
      return "";
  }

  // Helper function to calculate GCD of two numbers
  function gcd(a: number, b: number): number {
      if (b === 0) {
          return a;
      }
      return gcd(b, a % b);
  }

  // The length of the GCD string is the GCD of both string lengths
  const gcdLength = gcd(str1.length, str2.length);

  // return the substring of 0 to gcdlength
  return str1.substring(0, gcdLength);
}