let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

const playgame = (userChoice) => {
    console.log("User choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        msg.innerText = "Game was Draw!";
        msg.style.backgroundColor = "#040204";
    } else {
        let userwin = true;
        if (userChoice === "Rock") {
            if (compChoice === "Paper") {
                userwin = false;
            } else {
                userwin = true;
            }
        } else if (userChoice === "Paper") {
            if (compChoice === "Scissors") {
                userwin = false;
            } else {
                userwin = true;
            }
        } else {
            if (compChoice === "Rock") {
                userwin = false;
            } else {
                userwin = true;
            }
        }

        if (userwin === true) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "#c9393a";
        }
    }
};
