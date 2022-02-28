function partition(arr, left, right) {
    const pivot = arr[Math.floor((right + left) / 2)]; //middle element
    let i = left; //left pointer
    let j = right; //right pointer
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(array, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(array, index, right);
        }
    }
    return array;
}



const arr = [5,3,7,6,2,1];
var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); // [1,2,3,5,6,7]
