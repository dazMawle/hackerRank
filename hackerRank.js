
function plusMinus(arr) {
    var resArr = [0,0,0];
    arr.forEach(element => {
        if(element > 0){resArr[0]++};
        if(element < 0){resArr[1]++};
        if(element == 0){resArr[2]++};
    });
    resArr.forEach(number => {
        console.log((number / arr.length).toFixed(6));
    });
}

// plusMinus([1,-2,3,4,5,-6,7,0,9]);

// *********************************************************
// *********************************************************

// const arr = [9,7,1,3,5];

function miniMaxSum(arr) {
    arr.sort((a,b) => {return a - b});
    var sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    var min = sum - arr[arr.length-1];
    var max = sum - arr[0];
    console.log(`${min} ${max}`);
}

// console.log(miniMaxSum(arr));

// *********************************************************
// *********************************************************

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const militaryTime = (s) => {
    var hours = parseInt(s.substring(0,2));
    var remainder = s.substring(2,8);
    if(s.includes('PM') && hours !== 12){hours += 12};
    if(s.includes('AM')){(hours === 12) ? hours = '00' : hours = '0' + hours };
    return `${hours}${remainder}`; 
}

// console.log(militaryTime('07:05:45AM'));

// *********************************************************
// *********************************************************

// There is a collection of input strings and a collection of query strings.
//  For each query string, determine how many times it occurs in the list of input strings. 
// Return an array of the results.

const matchingStrings = (strings, queries) => {
    var returnArr = [];
    for(let i = 0; i < queries.length; i++){
        var count = 0;
        for(let j = 0; j < strings.length; j++){
            if(queries[i] === strings[j]){count++;}
        }
        if(count != 0){returnArr.push(count)}else{returnArr.push(0)};
    }
   return returnArr;
}

var queries = ['a', 'c', 'b', 'z'];

var strings = ['a', 'a', 'z', 'c'];

// console.log(matchingStrings(strings, queries));


// *********************************************************
// *********************************************************

// Given an array of integers, where all elements but one occur twice,
// find the unique element.

const lonelyInteger = (a) => {
    a.sort()
    for(let i = 0; i < a.length; i++){
        if(a[i] !== a[i+1] && a[i] !== a[i-1]){return a[i];}
    };
}

// var testArr = [9,9,4,2,0,6,7,4,5,5,1,2,1,6,7];
// console.log(lonelyInteger(testArr));


// *********************************************************
// *********************************************************

// You will be given a list of 32 bit unsigned integers. 
// Flip all the bits (0 -> 1 and 1 -> 0) and return the result as an unsigned integer.

const flippingBits = (n) => {
    var numString = (n >>> 0).toString(2).padStart(32, '0');
    var numSplit = numString.split('');
    numSplit.forEach((element, index) => {
        if(element == 1){numSplit[index] = 0}else{numSplit[index] = 1};
    });
    var joinedString = numSplit.join('');
    return parseInt(joinedString, 2);
}

// console.log(flippingBits(1));


// *********************************************************
// *********************************************************

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = (arr) => {
    var d1 = 0;
    var d2 = 0; 
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i === j){
                d1 += arr[i][j];
            }
            if(i + j === arr.length -1){
                d2 += arr[i][j];
            }
        }
    }
    return Math.abs(d1 - d2);
}

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9]
//  ];

// console.log(diagonalDifference(arr));


// *********************************************************
// *********************************************************


// Given a list of integers, count and return the number of 
// times each value appears as an array of integers.

const countingSort = (arr) => {
    var auxArr = Array(100).fill(0);
    for(let i = 0; i < arr.length; i++){
        auxArr[arr[i]]++;
    }
    return auxArr;
}

const arr = [1,3,4,10,7,3,8,9,9,0];

// console.log(countingSort(arr));