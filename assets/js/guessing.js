function getUserInfo() {
    const userName = prompt('what is your Username');
    console.log(userName);
    let p = document.createElement('p');
    let userNameInfo = document.createTextNode( userName);
    p.appendChild(userNameInfo);
    document.getElementById('userNameResult').appendChild(p);
}

getUserInfo();

 

let rangeNum = 2
let levelNumber = document.getElementById('levelNum').innerText;
let levelInfo = document.getElementById('rangeInfo').innerText;
let scoreInfo = document.getElementById('score').innerText;

document.getElementById('submitInput').addEventListener('click',clearFeedback);
document.getElementById('submitInput').addEventListener('click',checkResult);

function checkResult(){
    let playerInput = document.getElementById('playerInput').value;
    /* let playerInput = prompt('Guess a number'); */
    let inputLength = playerInput.length
    let computerGuess = Math.floor(Math.random() * rangeNum ) + 1;
    console.log(playerInput);
    console.log(computerGuess);
    console.log (levelNumber);

    if (inputLength == 0 ){
        alert('please guess a number first');
    }else if (playerInput == computerGuess){
        document.getElementById('levelNum').innerText = ++ levelNumber ;
        document.getElementById('rangeInfo').innerText = ++ levelInfo ;
        document.getElementById('score').innerText = ++ scoreInfo ;
        document.getElementById('playerInput').value = '';
        rangeNum ++;
        
        const congratMessage = 'CONGRATS!! you guessed the correct number';
        let p = document.createElement('p');
        let playerScore = document.createTextNode(congratMessage);
        p.setAttribute('id','feedback');
        p.appendChild(playerScore);
        document.getElementById('answer').appendChild(p);   

    }else{
        const incorrectMessage = 'Oops wrong guess, Try Again';
        let p = document.createElement('p');
        let playerScore = document.createTextNode(incorrectMessage);
        p.setAttribute('id','feedback');
        p.appendChild(playerScore);
        document.getElementById('answer').appendChild(p);
    }
    
}

function clearFeedback (){
        document.getElementById('feedback').remove();
}



