/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
// Cache for multiple calls to lengthAfterTransformations
const zGrowthCache = new Uint32Array(100_000 + 1);
let zGrowthCacheComputedUpTo = 0;

// base case: a single 'z' with 0 transforms has length 1
zGrowthCache[0] = 1;

/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
function lengthAfterTransformations(s, t) {
  const MODULO = 1_000_000_007;
  const ALPHABET_SIZE = 26;
  const ALPHABET_MINUS_ONE = 26 - 1;
  const CHAR_CODE_OFFSET = 97;

  // 1. Extend our z-growth cache up to t (only do the new steps)
  if (zGrowthCacheComputedUpTo < t) {
    for (let step = zGrowthCacheComputedUpTo + 1; step <= t; ++step) {
      if (step <= ALPHABET_MINUS_ONE) {
        // for 1…25, “z” → “ab” → length is always 2
        zGrowthCache[step] = 2;
      } else {
        // recurrence: g[k] = g[k–25] + g[k–26]
        const sum =
          zGrowthCache[step - ALPHABET_MINUS_ONE] +
          zGrowthCache[step - ALPHABET_SIZE];
        // keep in [0, MODULO)
        zGrowthCache[step] = sum >= MODULO ? sum - MODULO : sum;
      }
    }
    zGrowthCacheComputedUpTo = t;
  }

  // 2. Count each character in s with a single reusable buffer
  const letterCounts = new Uint32Array(26).fill(0);
  for (let i = 0, len = s.length; i < len; ++i) {
    letterCounts[s.charCodeAt(i) - CHAR_CODE_OFFSET]++;
  }

  // 3. Compute total contribution per letter‐type (only 26 iterations)
  let total = 0;
  for (let code = 0; code < ALPHABET_SIZE; ++code) {
    const count = letterCounts[code];
    if (count === 0) {
      continue;
    }

    // how many transforms until this letter *becomes* 'z'?
    const untilZ = ALPHABET_MINUS_ONE - code;
    // how many transforms remain *after* it first hits 'z'?
    const remaining = t - untilZ;
    // if remaining ≤ 0, it never hit 'z' → stays length 1
    const contribution = remaining > 0
      ? zGrowthCache[remaining]
      : 1;

    total += count * contribution;
  }

  // only one final modulo
  return total % MODULO;
}