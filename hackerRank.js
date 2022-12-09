
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




