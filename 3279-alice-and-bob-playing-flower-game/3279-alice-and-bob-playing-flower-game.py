class Solution:
    def flowerGame(self, n: int, m: int) -> int:
        xOdd = (n + 1) // 2
        xEven = n // 2
        yOdd = (m + 1) // 2
        yEven = m // 2
        return xOdd * yEven + xEven * yOdd
        