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










 