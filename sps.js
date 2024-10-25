let userWins = 0;
let compWins = 0;
 
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const checkCompChoice = () => {
    let options = ['stone','paper','scissor'];
    let randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
}

const showWinner = (userChoice,compChoice,userWin) => {
    if(userWin){
        userWins++;
        userScorePara.innerText = userWins;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compWins++;
        compScorePara.innerText = compWins;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
    
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const compChoice = checkCompChoice();
    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==='stone'){
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice==='paper'){
            userWin = compChoice === 'scissor' ? false : true;
        }
        else{
            userWin = compChoice === 'stone' ? false : true;
        }
        showWinner(userChoice,compChoice,userWin);
    }
    

}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})