// sort array without the use of a sort function
//     input :-var a = [1, 2, 5, 3, 4, 6, 7, 8];
// output: -var a = [1, 2, 3, 4, 5, 6, 7, 8];


const array = [1, 2, 5, 3, 4, 6, 7, 8];

//using inbuilt method;
// console.log(array.sort((a, b) => b - a)) //descing order

// console.log(array.sort((a, b) => a - b)) // asc order


function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}


//bubble sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                //swaping
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array;
}


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2)
    let left = [];
    let right = [];
    let pivot = array[mid];
    for (let i = 0; i < array.length; i++) {
        if (i === mid) continue; // skip pivot itself
        if (array[i] < array[mid]) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log(mergeSort(array))
// console.log(bubbleSort(array))
// console.log(selectionSort(array))
// console.log(insertionSort(array))
// console.log(quickSort(array), ">>>>>>>")