const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output")

const romanNumeralConvert = (num) => {
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
   
   let result = "";
   for(let i = 0; num; i++){
       while(num >= romanNumeral[i].charVal){
           num -= romanNumeral[i].charVal;
           result += romanNumeral[i].char;
       }
   }
   return result;
}



convertBtn.addEventListener("click", () => {
    if (number.value === "") {
        output.textContent = "Please enter a valid number";
       } else if (number.value < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
       } else if (number.value >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999"
       } else if (number.value == 0) {
        output.textContent = "0"
       }else {
       let num = number.value
        output.textContent = romanNumeralConvert(num)
}
        
});


/*
convertBtn.addEventListener("click", () => {
for(let i = 0; i < romanNumeral.length; i++) {
    if(number.value == romanNumeral[i].charVal) {
        output.textContent = romanNumeral[i].char;
    }
}
})

convertBtn.addEventListener("click", () => {
if(number.value == "2") {
    output.textContent = romanNumeral[12].char + romanNumeral[12].char;
}
})

convertBtn.addEventListener("click", () => {
    if(number.value == "3") {
        output.textContent = romanNumeral[12].char + romanNumeral[12].char + romanNumeral[12].char;
    }
    })

*/
    
