function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    const leftSort = mergeSort(arr.slice(0, mid));

    const rightSort = mergeSort(arr.slice(mid));


    return merge(leftSort, rightSort);
}



function merge(arrA, arrB){
    const result = [];
    let i = 0;
    let j = 0;

    while(i < arrA.length && j < arrB.length) {
        if(arrA[i] > arrB[j]){
            result.push(arrB[j]);
            j++;
        } else {
            result.push(arrA[i]);
            i++;
        }
    }

    while(i < arrA.length) {
        result.push(arrA[i]);
        i++;
    }

    while(j < arrB.length) {
        result.push(arrB[j]);
        j++;
    }

    return result;

}

console.log(mergeSort([1, 10, 12, 15, 2, 9, 11]));
//[1, 2, 9, 10, 11, 12, 15]
console.log(mergeSort([])); // []
console.log(mergeSort([1])); // [1]
console.log(mergeSort([5, 1])); //[1, 5]
