function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const test_arr = [1, 2, 3, 4, 5]
console.log(sumOfArray(test_arr))
