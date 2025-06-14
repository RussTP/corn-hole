
//Variables
 let blueCounter = 0;
 let greenCounter = 0;
 let round = 0;
 let gameOver = false;
 

const btnOneBlue = document.getElementById("blueOneBtn");
const btnThreeBlue = document.getElementById("blueThreeBtn");
const blueDisplay = document.getElementById("blueScore");


const btnOneGreen = document.getElementById("greenOneBtn");
const btnThreeGreen = document.getElementById("greenThreeBtn");
const greenDisplay = document.getElementById("greenScore");

const outcomeDiv = document.getElementById("outcome");
const roundOverBtn = document.getElementById("roundOver");

const teamRed = document.getElementById("red");
const teamGrey = document.getElementById("grey");
const teamBlue = document.getElementById("blue");
const teamGreen = document.getElementById("green");
const teamColor1 = document.getElementById("teamColor1");
const teamColor2 = document.getElementById("teamColor2");

const linkTeam1 = document.getElementById("blueLink"); 
const linkTeam2 = document.getElementById("greenLink"); 
// Select bean bag colours


function teamSelect() {
teamRed.addEventListener("click", () =>  {
btnOneBlue.classList.remove("pointsBtn");
btnOneBlue.classList.add("red-theme");
btnThreeBlue.classList.add("red-theme");
teamColor1.textContent = "Red Team";
linkName("Red");

    })
teamGrey.addEventListener("click", () => {
btnOneGreen.classList.remove("pointsBtn");
btnOneGreen.classList.add("grey-theme");
btnThreeGreen.classList.add("grey-theme");
teamColor2.textContent = "Grey Team";
linkName("Grey");    
})
teamBlue.addEventListener("click", () => {
btnOneBlue.classList.remove("red-theme");
btnThreeBlue.classList.remove("red-theme");
btnOneBlue.classList.add("blue-theme");
btnThreeBlue.classList.add("blue-theme");
teamColor1.textContent = "Blue Team";
linkName("Blue");
})
teamGreen.addEventListener("click", () => {
btnOneGreen.classList.remove("grey-theme");
btnThreeGreen.classList.remove("grey-theme");
btnOneGreen.classList.add("green-theme");
btnThreeGreen.classList.add("green-theme");
teamColor2.textContent = "Green Team";
linkName("Green");
})
}
document.addEventListener("DOMContentLoaded", () => {
  teamSelect();
 
});


function linkName(teamSelect) {
switch (teamSelect) {
    case "Red":
    case "Blue":
        linkTeam1.textContent = teamSelect;
        break;
    case "Grey":
    case "Green":     
        linkTeam2.textContent = teamSelect;
        break;
        default:
            console.log("Unknown teamSelect:", teamSelect);
    }
}

// Checking outcome of the game, (points logic)

function checkOutcome() {
    if ((blueCounter >= 21 || greenCounter >= 21) && !gameOver) {
        let outcome;
    if (blueCounter === greenCounter) {
            tie.textContent = "It's a tie, next highest score wins!";
            tie.style.height = "100px";
              tie.style.textAlign = "center";
        tie.style.justifyContent = "center";
          tie.style.border = "2px solid red";
    tie.style.alignItems ="center";
    tie.style.paddingTop = "42px";
            return;
    } 
        
    else if (Math.abs(blueCounter - greenCounter) >= 1) {
            const winner = blueCounter > greenCounter ? "Blue" : "Green";
            outcome = `${winner} team won the game!`;
            outcomeDiv.textContent = outcome;
            outcomeDiv.style.color = "rgb(82, 59, 58)";
            outcomeDiv.style.backgroundColor = "rgb(230, 188, 137)"
            outcomeDiv.style.display = "flex";
            outcomeDiv.style.flexGrow ="1";
            outcomeDiv.style.flexShrink ="2";
            outcomeDiv.style.borderRadius = "50px";
            outcomeDiv.style.border = "3px solid rgb(193, 110, 0)";
            outcomeDiv.style.margin = "5px";
            roundOverBtn.disabled = true;
            tie.style.display = "none";


        } else {
        outcomeDiv.textContent = `${outcome} - Final Score Blue Team: ${blueCounter}  Green Team: ${greenCounter}`;
        outcomeDiv.style.padding = "10px";
        
        }
        
        //Reset Game, query  and logic

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
        roundOverBtn.disabled = false;
        roundOverBtn.textContent = "Round Over";
        outcomeDiv.style.display = "none";
      
        }

        btnOneBlue.disabled = true;
        btnThreeBlue.disabled = true;
        btnOneGreen.disabled = true;
        btnThreeGreen.disabled = true;
    }
}

// button event listener

btnOneBlue.addEventListener("click", () => {
    blueCounter +=  + 1;
    blueDisplay.textContent = "Score: " + blueCounter;
  
});

btnThreeBlue.addEventListener("click", () => {
    blueCounter += 3;
    blueDisplay.textContent = "Score: " + blueCounter;
  
});

btnOneGreen.addEventListener("click", () => {
    greenCounter += 1;
    greenDisplay.textContent = "Score: " + greenCounter;
   
});

btnThreeGreen.addEventListener("click", () => {
    greenCounter += 3;
    greenDisplay.textContent = "Score: " + greenCounter;
    
});

roundOverBtn.addEventListener("click", function () {
round ++;
roundOverBtn.textContent = "Round: " + round; 

gameRound();
});

let lastCheckedRound = 0;

function gameRound() {
    if(round !== lastCheckedRound) {
        checkOutcome();
        lastCheckedRound = round;
    }
}

// touch screen interface to disallow hover on touch screen

const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;

if (!isTouchDevice) {
    document.querySelectorAll("button").forEach(btn => btn.classList.add("hoverable"));
    document.querySelectorAll(".bagSelect").forEach(bag => bag.classList.add("hoverable"));

} else {
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("hoverable"));
    document.querySelectorAll(".bagSelect").forEach(bag => bag.classList.remove("hoverable"));
}


//awesome hover, click effects for game buttons

function onTouchStart(el) {
    el.classList.add("touch-active");

}

function onTouchEnd(el) {
    setTimeout(() => {
        el.classList.remove("touch-active");
    }, 100);
}

function shakeButton(el) {
    el.classList.add("shake");
    setTimeout(() => el.classList.remove("shake"), 400);
}

document.querySelectorAll(".bagSelect").forEach((bag) => {
    bag.addEventListener("touchstart", () => shakeButton(bag));
    bag.addEventListener("mousedown", () => shakeButton(bag));
});

document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("touchstart", () => shakeButton(btn));
    btn.addEventListener("mousedown", () => shakeButton(btn));
});
