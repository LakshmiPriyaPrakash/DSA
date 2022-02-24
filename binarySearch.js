// function will search through the array for the target value
//if found will return the index of the target value
//else will return "target not found"
function binarySearch(arr, target) {    //O(log n)
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);

    while(min <= max) {
        if(arr[mid] === target) return `Target found at index ${mid}`;

        if(arr[mid] < target) {
            min = mid + 1;
            mid = Math.floor((min + max) / 2);
        }

        if(arr[mid] > target) {
            max = mid - 1;
            mid = Math.floor((min + max) / 2)
        }
    }

    return "Target not found in array";

}



const array = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100];

const target = 52;

console.log(binarySearch(array, target))
