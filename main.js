// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(age){
    if(age < 16){
        return "You can't drive.";
    }else if(age === 16 || age === 17){
        return "You can drive but not vote.";
    }else if(age >= 18 && age <= 24){
        return "You can vote but not rent a car.";
    }else{
        return "You can do pretty much anything.";
    }
}

function oddIndices(arr){
    let output = [];
    for (let i = 1; i < arr.length; i += 2){
        if(i % 2 !== 0){  //Kyle added this line of a conditional to avoid bugs in code
            output.push(arr[i]);
        }
    }
    return output;
}

function numOddValues(arr){
    let output = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            output++;
        }
    }
    return output;
}

function averageStringLength(arr){
    if(arr.length === 0){
        return 0; 
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i].length;
    }
    return sum / arr.length;
}

function firstPunctuationIndex(str){
    for (let i = 0; i < str.length; i++){
        if (str[i] === "."){
            return str.indexOf(".");
        }else if (str[i] === "?"){
            return str.indexOf("?");
        }else if (str[i] === "!"){
            return str.indexOf("!");
        }
    }
    return -1;
}
//if( str[i] === "." || str[i] === "?" || str[i] === "!") return i // Kyles way to avoid repetition

function getPlace(scoreArr, score){
    let str;
    for (let i = 0; i < scoreArr.length; i++){
        if (score > scoreArr[i]){
            str = i+1;
            break;
        }
    }
    if(!str){
        str = scoreArr.length+1;
    }
    if(str >= "11" && str <= 13){
        return str + "th place";
    }
    let human = str.toString().split("");
    if (human[human.length-1] === "1"){
        return str + "st place";
    }else if (human[human.length-1] === "2"){
        return str + "nd place";
    }else if (human[human.length-1] === "3"){
        return str + "rd place";
    }else{
        return str + "th place";
    }
}

function addToObj(person, key, value) {
    if (typeof key !== 'string') {
        return 'Function must be called with a valid key.';
    }
    person[key] = value;
}


// function duplicateElements(arr) {
//     let counts = {}; 
//     let duplicates = []; 
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         counts[num] = (counts[num] || 0) + 1;
//     }
//     for (let key in counts) {
//         if (counts[key] > 1) {
//             duplicates.push(Number(key)); 
//         }
//     }
//     return duplicates; 


// Kyles way for stretch global

// function duplicateElements(numArr){
//     //.indexOf
//     const solution = []
//     for(let i = 0; i < numArr.length; i++){
//         if(numArr.indexOf(numArr[i]. i+1) !== -1){
//             if(!solution.includes(numArr[i]))
//                 //also an else statement would work
//             solution.push(numArr[i])
//         }   //how do we use indexOf() for checking repetition       
//     }
//     return solution
// }
// const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7]

function duplicateElements(numArr){
    const solution = []
    for(let i =0; i < numArr.length; i++){
        if(numArr.indexOf(numArr[i], i+1) !== -1){
            if(!solution.includes(numArr[i])){
                solution.push(numArr[i])
            }
        }
    }
    return solution
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements,
}