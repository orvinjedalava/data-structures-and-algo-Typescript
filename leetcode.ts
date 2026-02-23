export function mergeAlternately(word1: string, word2: string): string {
    const word1Length: number = word1.length;
    const word2Length: number = word2.length;

    const result: string[] = [];

    for (let i: number = 0; i < Math.max(word1Length, word2Length); i++)
    {
        if (i < word1Length )
            result.push(word1[i]);
        if (i < word2Length )
            result.push(word2[i]);
    }

    return result.join('');
};

/* 
  Analysis
  The key insight is that if a string x divides both str1 and str2, then:

  The length of x must divide both lengths of str1 and str2
  x repeated multiple times should equal str1 and str2
  The largest such string would have length equal to the GCD (Greatest Common Divisor) of the two string lengths.

  Also, a necessary condition is: str1 + str2 === str2 + str1. If this isn't true, there's no common divisor string.
*/
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

export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // Find the maximum number of candies any kid currently has
    const maxCandies = Math.max(...candies);

    // Since we know the maximum number of results, we can initialize the result array with the exact length and fill it with false by default.
    // This way, we avoid unnecessary resizing of the array during the map operation.
    const result: boolean[] = new Array(candies.length).fill(false);
    
    // We use for loop instead of map to avoid creating an intermediate array and to directly set the values in the result array.
    for (let i:number = 0; i < candies.length; i++)
    {
        result[i] = candies[i] + extraCandies >= maxCandies;
    }

    return result;
};