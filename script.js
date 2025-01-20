const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output")




convertBtn.addEventListener("click", () => {
    if (number.value === "") {
        output.textContent = "Please enter a valid number";
       } else if (number.value < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
       } else if (number.value >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999"
       }
});


 /*  const M = "1000";
   const CM = "900";
   const D = "500";
   const CD = "400";
   const C = "100";
   const XC = "90";
   const L = "50";
   const XL = "40";
   const X = "10";
   const IX = "9";
   const V = "5";
   const IV = "4";
   const I = "1"; 

const romanNumeral = [
    M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I
]*/

const romanNumeral = [
    {
        char: "M",
        charVal: 1000  
    },
    {
        char: "CM",
        charVal: 900
    },
    {
        char: "D", 
        charVal: 500
    },
    {
        char: "CD", 
        charVal: 400
    },
    {
        char: "C", 
        charVal: 100
    },
    {
        char: "XC", 
        charVal: 90
    },
    {
        char: "L", 
        charVal: 50
    },
    {
        char: "XL", 
        charVal: 40
    },
    {
        char: "X", 
        charVal: 10
    },
    {
        char: "IX", 
        charVal: 9
    },
    {
        char: "V", 
        charVal: 5
    },
    {
        char: "IV", 
        charVal: 4
    },
    {
        char: "I", 
        charVal: 1
    }
    
]
/*
convertBtn.addEventListener("click", () => {
if (number.value == romanNumeral[0].charVal ) {output.textContent = romanNumeral[0].char;
}

})
*/

//console.log(romanNumeral[0].charVal);


convertBtn.addEventListener("click", () => {
for(let i = 0; i >= 0; i++) {
    if(number.value == romanNumeral[i].charVal){
        output.textContent = romanNumeral[i].char;
    }
    
}
})