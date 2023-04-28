/*Fråga 1
Ta emot två arrayer som argument. Returnera en array som endast innehåller värden som finns i en utav arrayerna - dvs om ett värde förekommer i bägge arrayerna, ska det ej returneras.

1.b Returnera istället två arrayer - En med de unika värdena, en med värden som förekommer i bägge arrayerna.*/

let array1 = [3, 5, 6, 7, 34, 56, 87];
let array2 = [3, 4, 7, 89, 56, 34, 60];

//Skapar funktion som tar in 2 arrayer
//Vi skapar 2 tomma arrayer som vi stoppar in våra värden i
//Vi börjar med array 1 och jämför den med array två i en forEach
//Sedan kör vi en filter utifrån array2

let compareArray = (arr1, arr2) => {
    let uniqueValues1 = [];
    let sharedValues = [];

    arr1.forEach(num => {
        if (arr2.includes(num)) {
            sharedValues.push(num);
        } else {
            uniqueValues1.push(num);
        }
    });

    let uniqueValues2 = arr2.filter((num) => {
        return !arr1.includes(num);
    })

    let uniqueValues = uniqueValues1.concat(uniqueValues2);

    let answer = {
        unique: uniqueValues,
        shared: sharedValues
    }

    return answer;
}

/*2. Ta emot en sträng som ett argument. Returnera strängen i omvänd ordning.
Returnera endast strängen om den inte är ett palindrom. Om den är det, returnera texten “It’s reads the same, dummy!”*/

let switchString = (str) => {
    let strCopy = [...str];
    strCopy.reverse();
    if (str === strCopy.join('')) {
        return 'It’s reads the same, dummy!'
    } else {
        return strCopy.join('');
    }
}

console.log(switchString('hej'));


/*3. Ta emot en sträng som ett argument. Returnera strängen, men gör nu så att varje nytt ord blir versaler, och övriga bokstäver blir gemener. T.ex myFunction(“HeJ PÅ dig dÄR!”) => “Hej På Dig Där!”. */

let capitalizeWords = (str) => {
    let words = str.split(" ");
    words.forEach((word, index) => {
        words[index] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(" ");
}

console.log(capitalizeWords("HeJ PÅ dig dÄR!"));
