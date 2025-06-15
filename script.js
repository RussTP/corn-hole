
//Variables
 let blueCounter = 0;
 let greenCounter = 0;
 let round = 0;
 let gameOver = false;
 

const btnOneBlue = document.getElementById("blueOneBtn");
const btnThreeBlue = document.getElementById("blueThreeBtn");
const blueDisplay = document.getElementById("blueScore");
const revertBtnT1 = document.getElementById("revertBtnTeam1")


const btnOneGreen = document.getElementById("greenOneBtn");
const btnThreeGreen = document.getElementById("greenThreeBtn");
const greenDisplay = document.getElementById("greenScore");
const revertBtnT2 = document.getElementById("revertBtnTeam2")

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
            tie.style.display = "flex";
            tie.textContent = `It's a tie, ${blueCounter} to ${greenCounter} next highest score wins!`;
            tie.style.height = "100px";
            tie.style.paddingTop = "30px";
            tie.style.borderTop = "2px solid red";
            tie.style.borderBottom = "2px solid red";
            tie.style.alignItems ="center";
            return;
    } 
        
    else if (Math.abs(blueCounter - greenCounter) >= 1) {
            const winner = blueCounter > greenCounter ? teamColor1.textContent : teamColor2.textContent;
            outcome = `${winner} team won the game! Final score: ${blueCounter} - ${greenCounter}`;
            outcomeDiv.textContent = outcome;
            outcomeDiv.style.color = "rgb(82, 59, 58)";
            outcomeDiv.style.backgroundColor = "rgb(230, 188, 137)"
            outcomeDiv.style.display = "flex";
            outcomeDiv.style.alignItems = "center";
            outcomeDiv.style.padding = "20px";
            outcomeDiv.style.boxShadow ="rgb(193, 110, 0) 5px 10px 12px";
            outcomeDiv.style.flexGrow ="1";
            outcomeDiv.style.flexShrink ="3";
            outcomeDiv.style.borderRadius = "50px";
            outcomeDiv.style.border = "3px solid rgb(193, 110, 0)";
            resetBtn.style.padding = "30px";
            roundOverBtn.disabled = true;
            tie.style.display = "none";


        } else {
        outcomeDiv.textContent = `${outcome} - Final Score ${winner} Team: ${blueCounter}  Team: ${greenCounter}`;
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

        btnOneBlue.classList.remove("disabled-btn");
        btnThreeBlue.classList.remove("disabled-btn");
        btnOneGreen.classList.remove("disabled-btn");
        btnThreeGreen.classList.remove("disabled-btn");
        
       

        revertBtnT1.disabled = false;
        revertBtnT2.disabled = false;
        revertBtnT1.classList.remove("disabled-btn");
        revertBtnT2.classList.remove("disabled-btn");

        roundOverBtn.classList.remove("disabled-btn");


      
        }

        btnOneBlue.disabled = true;
        btnThreeBlue.disabled = true;
        btnOneGreen.disabled = true;
        btnThreeGreen.disabled = true;
        roundOverBtn.disabled = true;

        btnOneBlue.classList.add("disabled-btn");
        btnThreeBlue.classList.add("disabled-btn");
        btnOneGreen.classList.add("disabled-btn");
        btnThreeGreen.classList.add("disabled-btn");
        
      

        revertBtnT1.disabled = true;
        revertBtnT2.disabled = true;
       
        revertBtnT1.classList.add("disabled-btn");
        revertBtnT2.classList.add("disabled-btn");

        roundOverBtn.classList.add("disabled-btn");
        

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

revertBtnT1.addEventListener("click", () => {
    blueCounter += -1;
     if (blueCounter <= 1) {
     blueCounter = 0;
    }
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

revertBtnT2.addEventListener("click", () => {
    greenCounter += -1;
     if (greenCounter <= 1) {
        greenCounter = 0;
    }
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
