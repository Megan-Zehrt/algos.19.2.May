// 2500. Delete Greatest Value in Each Row

// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.



/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    
    let answer = 0

    for (let row of grid) {
        row.sort((a, b) => b - a);
    }

    while(grid[0].length > 0){
        let maxRemoved = 0

        for(let row of grid){
            let removed = row.shift()
            maxRemoved = Math.max(maxRemoved, removed)
        }

        answer += maxRemoved
    }

    return answer

};