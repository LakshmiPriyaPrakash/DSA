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

    if(i < arrA.length) {
        for(let k = i; k < arrA.length; k++) {
            result.push(arrA[k])
        }
    }

    if(j < arrB.length) {
        for(let k = i; k < arrB.length; k++) {
            result.push(arrB[k])
        }
    }

    return result;

}

console.log(merge([1,10, 12, 15], [2,9,11]));
