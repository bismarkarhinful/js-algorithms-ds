// algorithms/searching/binary-search.js

function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (sortedArray[mid] === target) {
            return mid;
        }
        
        if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}

// Example test cases
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(testArray, 7)); // Output: 6
console.log(binarySearch(testArray, 11)); // Output: -1

module.exports = binarySearch;
