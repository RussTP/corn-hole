 let blueCounter = 0;
 let greenCounter = 0;

 

const btnOneBlue = document.getElementById("blueOneBtn");
const btnThreeBlue = document.getElementById("blueThreeBtn");
const blueDisplay = document.getElementById("blueScore");

const btnOneGreen = document.getElementById("greenOneBtn");
const btnThreeGreen = document.getElementById("greenThreeBtn");
const greenDisplay = document.getElementById("greenScore");

const outcomeDiv = document.getElementById("outcome");





function checkOutcome() {
    if ((blueCounter >= 21 || greenCounter >= 21) && !outcomeDiv.textContent) {
        let outcome;
        if (blueCounter === greenCounter) {
            outcome = "It's a tie!";
        } else {
            const winner = blueCounter > greenCounter ? "Blue" : "Green";
            outcome = `${winner} won the game!`;
            outcomeDiv.style.color = "rgb(82, 59, 58)";
            outcomeDiv.style.backgroundColor = "rgb(230, 188, 137)"
            outcomeDiv.style.display = "flex";
            outcomeDiv.style.flex = "20%";
            outcomeDiv.style.borderRadius = "50px";
            outcomeDiv.style.border = "3px solid rgb(193, 110, 0)";
            outcomeDiv.style.margin = "10px";

        }
        outcomeDiv.textContent = `${outcome} - Final Score Blue Team: ${blueCounter}  Green Team: ${greenCounter}`;
        outcomeDiv.style.padding = "10px";
        

        
        const btnDiv = document.getElementById("outcome");
        const resetBtn =  document.createElement("button");
        resetBtn.innerText = "Play again!"
        resetBtn.id = "reset"
        btnDiv.appendChild(resetBtn);
        resetBtn.addEventListener("click", resetGame);
       
       
        function resetGame() {
              blueCounter = 0;
              greenCounter = 0;
             document.querySelector("#outcome").textContent ="";
             document.querySelector("#blueScore").textContent = "Score: 0"
              document.querySelector("#greenScore").textContent = "Score: 0"
                 btnOneBlue.disabled = false;
        btnThreeBlue.disabled = false;
        btnOneGreen.disabled = false;
        btnThreeGreen.disabled = false;
        outcomeDiv.style.display = "none";

        }

        btnOneBlue.disabled = true;
        btnThreeBlue.disabled = true;
        btnOneGreen.disabled = true;
        btnThreeGreen.disabled = true;
    }
}



btnOneBlue.addEventListener("click", () => {
    blueCounter +=  + 1;
    blueDisplay.textContent = "Score: " + blueCounter;
    checkOutcome();
});

btnThreeBlue.addEventListener("click", () => {
    blueCounter += 3;
    blueDisplay.textContent = "Score: " + blueCounter;
    checkOutcome();
});

btnOneGreen.addEventListener("click", () => {
    greenCounter += 1;
    greenDisplay.textContent = "Score: " + greenCounter;
    checkOutcome();
});

btnThreeGreen.addEventListener("click", () => {
    greenCounter += 3;
    greenDisplay.textContent = "Score: " + greenCounter;
    checkOutcome();
});

