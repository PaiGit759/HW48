let number = "2";

var street = "Finn Malmgrens väg";

const city = "Stockholm";

let s1 = "In the city of " + [city] + " on " + [street] + " at number " + [number] +" lives a very beautiful and smart cat."

/*
    console.log("In the city of " + [city] + " on " 
    + [street] + " at number " 
    + [number] +" lives a very beautiful and smart cat.");
*/
    var boxElem = document.activeElement.querySelector(".exsample");

    boxElem.innerHTML = boxElem.innerHTML + s1;