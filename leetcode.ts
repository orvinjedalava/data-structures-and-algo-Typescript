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

/*
  Analysis - Can Place Flowers
  
  The problem asks us to determine if we can plant n flowers in a flowerbed
  without placing any two flowers adjacent to each other.
  
  Key observations:
  1. We can plant a flower at position i if:
     - flowerbed[i] is currently 0 (empty)
     - flowerbed[i-1] is 0 or doesn't exist (left is empty or we're at start)
     - flowerbed[i+1] is 0 or doesn't exist (right is empty or we're at end)
  
  2. When we plant a flower, we should mark that position as 1 to prevent
     planting adjacent flowers in subsequent iterations.
  
  3. We can stop early if we've already planted n flowers.
  
  Time Complexity: O(flowerbed.length) - we traverse the array once
  Space Complexity: O(1) - we modify the array in place
*/
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // Early return if no flowers need to be planted
  if (n === 0) {
      return true;
  }
  
  let planted = 0;
  
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if current position is empty
    if (flowerbed[i] === 0) {
        // Check left neighbor (empty or out of bounds)
        const leftEmpty = i === 0 || flowerbed[i - 1] === 0;
        if (!leftEmpty) 
          continue;
        
        // Check right neighbor (empty or out of bounds)
        const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
        if (!rightEmpty)
          continue;
        
        // If both neighbors are empty (or don't exist), we can plant here
        flowerbed[i] = 1; // Plant the flower
        planted++;
        
        // Early exit if we've planted enough flowers
        if (planted >= n) {
            return true;
        }
    }
  }
  
  // Check if we planted enough flowers
  return planted >= n;
};

export function reverseVowels(s: string): string {
  const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const chars: string[] = s.split('');
  let left: number = 0;
  let right: number = chars.length - 1;

  while(left < right) {
    if (vowels.has(chars[left]) && vowels.has(chars[right])) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
      
    }

    if (left < right && !vowels.has(chars[left])) {
      left++;
    }

    if (left < right && !vowels.has(chars[right])) {
      right--;
    }
  }

  return chars.join('');
}