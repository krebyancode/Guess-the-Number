let enteredNumber = document.querySelector("#number")
let checkButton = document.querySelector("#check")
let attemptNo = document.querySelector("#attempt")
let output = document.querySelector("#text")
let count = 0;

generateNumber = () => Math.floor(Math.random()*100)+1;
let generatedNumber = generateNumber();
console.log(generatedNumber);

checkButton.addEventListener("click", (e) => {
    if (parseInt(enteredNumber.value)>100 || parseInt(enteredNumber.value)<=0 || enteredNumber.value == "") {
        output.innerHTML=`Please enter a valid number between 1 and 100.`;
        enteredNumber.value = ""
        count -= 1;
    } else {
        if (parseInt(enteredNumber.value)>generatedNumber) {
            output.innerHTML=`Entered number is: ${enteredNumber.value}. <br>Enter a smaller number.`;
            enteredNumber.value = ""
        } else if(parseInt(enteredNumber.value)<generatedNumber) {
            output.innerHTML=`Entered number is: ${enteredNumber.value}. <br>Enter a bigger number.`;
            enteredNumber.value = ""
        } else if(parseInt(enteredNumber.value)==generatedNumber) {
            output.innerHTML=`Entered number is: ${enteredNumber.value}. <br><span>CONGRATULATIONS... YOU WON!!!</span>`;
            enteredNumber.value = ""
            enteredNumber.remove();
            checkButton.innerHTML = "TRY AGAIN";
        }
    }
    count += 1;
    attemptNo.innerHTML=`Number of attempts: ${count}`
})

// try again butonu konulabilir. try again butonu ile event tanımla window load tan eski sayfayı yükle