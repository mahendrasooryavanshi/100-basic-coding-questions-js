// get the second largest number of the array list.
//     input : - a=[1, 2, 5, 3, 4, 6, 7, 8];
// output: - 7;

const array = [1, 2, 5, 3, 15, 4, 6, 7, 8];

//1. we can sort the array and find the element using merge or quick sort 
//2. we can use liner approch to find second largest element using 2 time loop.
//3. we can direct use Math.max(...array)
// console.log("using maths funtion", Math.max(...array))
function findLargestElementLiner(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right)
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++])
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}



function twoPointerApproch(array) {
    let start = 0;
    let end = array.length - 1;
    let max = -Infinity;
    while (start <= end) {
        if (array[start] > max) max = array[start];
        if (array[end] > max) max = array[end];
        start++;
        end--
    }
    return max;
}

console.log(twoPointerApproch(array))
// console.log(findLargestElementLiner(array), "liner serach")
// console.log(mergeSort(array)[array.length - 1])