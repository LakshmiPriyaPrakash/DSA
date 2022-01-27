function nextPerm(nums) {
    //find the lowest number from the end of the array
    //find the next highest number in the remaining array
    //swap the two
    //Sort the remaining part of the array

    let min = nums.length - 2; //min num index

    //finds the index at which the lowest number is from the end of array
    while(min >= 0 && nums[min] >= nums[min + 1]){
        min--;
    }

    if(min < 0) return nums.sort((a,b) => a-b);

    //Finds the next max number index from the min num point
    let max = Infinity;
    let nextMax;    //max num index

    for(let i = min + 1; i < nums.length; i++) {
        if(nums[i] < max) {
            nextMax = i;
            max = nums[i]
        }
    }

    //swap the min num and next max num
    let temp = nums[min];
    nums[min] = nums[nextMax];
    nums[nextMax] = temp;
    // console.log(nums)

    let restOfArr = nums.slice(min + 1);
    restOfArr.sort((a,b) => a-b);
    // console.log(restOfArr)


    let firstPart = nums.slice(0, min + 1);
    // console.log(firstPart)

    return [...firstPart, ...restOfArr];

};


console.log(nextPerm([1,3,2]))
