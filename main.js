/*Fråga 1
Ta emot två arrayer som argument. Returnera en array som endast innehåller värden som finns i en utav arrayerna - dvs om ett värde förekommer i bägge arrayerna, ska det ej returneras.*/

//Fråga 1 - med forEach
// let findUnique = (arr1, arr2) => {
//     let uniqueValues = [];

//     arr1.forEach((num) => {
//         if (!arr2.includes(num)) {
//             uniqueValues.push(num);
//         }
//     });
//     arr2.forEach((num) => {
//         if (!arr1.includes(num)) {
//             uniqueValues.push(num);
//         }
//     });

//     return uniqueValues;

// };
// console.log(findUnique(arrayOne, arrayTwo));

//Fråga 1 - med filter
let arrayOne = [3, 6, 7, 8, 12, 56, 43];
let arrayTwo = [3, 5, 6, 8, 2, 43, 90];


let findUnique = (arr1, arr2) => {
    let uniqueValues1 = [];
    let sharedValues = [];

    arr1.forEach(num => {
        if (arr2.includes(num)) {
            sharedValues.push(num);
        } else {
            uniqueValues1.push(num);
        }
    });

    let uniqueValues2 = arr2.filter((num) => !arr1.includes(num));
    let uniqueValues = uniqueValues1.concat(uniqueValues2);

    let answer = {
        unique: uniqueValues,
        shared: sharedValues
    }
    // return uniqueValues;
    return answer;
}

console.log(findUnique(arrayOne, arrayTwo));


/*Fråga 1.a
Returnera istället två arrayer - En med de unika värdena, en med värden som förekommer i bägge arrayerna.*/



/*Fråga 2
Ta emot en sträng som ett argument. Returnera strängen i omvänd ordning.
Returnera endast strängen om den inte är ett palindrom. Om den är det, returnera texten “It’s reads the same, dummy!”*/
let twist = (str) => {
    let strCopy = [...str]
    strCopy.reverse();
    if (str === strCopy.join('')) {
        return 'It’s reads the same, dummy!'
    } else {
        return strCopy.join('');
    }
}
// console.log(twist('hej'));
// console.log(twist('level'));

/*Fråga 3
Ta emot en sträng som ett argument. Returnera strängen, men gör nu så att varje nytt ord blir versaler, och övriga bokstäver blir gemener. T.ex myFunction(“HeJ PÅ dig dÄR!”) => “Hej På Dig Där!”.*/
// let capitalizeWords = (str) => {
//     let words = str.split(" ");
//     words.forEach((word, index) => {
//         words[index] = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     });

//     return words.join(" ");
// }

// console.log(capitalizeWords("HeJ PÅ dig dÄR!"));

/*slice väljer alla tecken i ordet från och med det andra tecknet (det vill säga, hela ordet förutom den första bokstaven*/