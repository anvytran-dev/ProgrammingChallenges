//P: There are 2 parameters --2 arrays of integers named 'a' and 'b'.
//R: Return the difference of the cuboids' volumes.
//E: ([3, 2, 5], [1, 4, 4]) -> 14
//P: Use the .reduce() method to find the cuboid volume of each array. Find the difference.
function findDifference(a, b) {
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y))
}
