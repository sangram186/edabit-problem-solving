// 1 matchHouses problem
function matchHouses(step) {
    let forOneHouse = 6;
    if(step < 0 ){
        return 'Not a valid number';
    }
    else if(step === 0){
        return forOneHouse * step;
    }
    else if(step === 1){
        return forOneHouse * step;
    }
    else{
        return (forOneHouse * step) - step + 1;
    }
}

// 2 Convert Number to String of Dashes
function Go(num) {
    let dashes = '';
    for(let i = 0; i < num; i++){
        dashes = dashes + '-';
    }
    return dashes;
}

// 3 Missing Third Angle
function missingAngle(angle1, angle2){
    let sumOfAngles = angle1 + angle2;
    let missingAngleDegree = 180 - sumOfAngles;
    if(missingAngleDegree < 90){
        return 'acute';
    }
    if(missingAngleDegree === 90){
        return 'right';
    }
    if(missingAngleDegree > 90 && missingAngleDegree < 180){
        return 'obtuse';
    }
}

// 4 Fix the Error: Vowel Edition
function removeVowels(str){
    return str.replace(/[aeiou]/g,'');
}

// 5 Where is BoB!?
function findBob(names){
    return names.indexOf('Bob');
}

// 6 Add up the Numbers from a Single Number
function addUp(num){
    let result = 0;
    for(let i = 0; i <= num; i++){
        result += i;
    }
    
}

// 7 Return the First and Last Elements in an Array
const arra = [5, 10, 15, 20, 25];
function firstLast(arr){
    result = [];
    result.push(arr[0]);
    result.push(arr[arr.length-1]);
    return result;
}


// 8 Both Zero, Negative or Positive
function both(n1, n2) {
	if(n1 < 0 && n2 < 0 || n1 > 0 && n2 > 0 || n1 === 0 && n2 === 0){
        return true;
    } else {
        return false;
    }
}

// 9 Get Word Count
 const str = 'Just an  example  here move along';
 function countWords(string){
     let count = 0;
     for(let i = 0; i < string.length; i++){
        if(string[i] === ' '){
            count++;
        }
     }
     return count + 1;
 }

// 10 Count Syllables
function numberSyllables(word) {
	let count = 0;
     for(let i = 0; i < word.length; i++){
        if(word[i] === '-'){
            count++;
        }
     }
     return count + 1;
}

// 11 Flip the Boolean
function reverse(bool){
    if(bool === true){
        return false;
    } else if(bool === false){
        return true;
    } else {
        return 'boolean expected';
    }
}

// 12 Convert Number to Corresponding Month Name
function monthName(num){
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const result = month[num - 1];
    return result;
}

