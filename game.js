//random number generation
let number = Math.trunc(Math.random()*20)+1;
//storing number
document.querySelector('.think').textContent = number;


let score = 20;
document.querySelector('.score-number').textContent = score;
let highscore = 0;
//adding click event to button
document.querySelector('.check').addEventListener('click', function(){
    const thoughts = Number(document.querySelector('.number-box').value);
    
   //adding cases
    if(!thoughts){
        document.querySelector('.display-message').textContent = "no number";
        
    }else if (thoughts === number){
        document.querySelector('.display-message').textContent="hey your guess is right😊";
        if(score > highscore){
          highscore = score;
          document.querySelector('.highscore-number').textContent= highscore;
        }
        
    }else if(thoughts > number){
        if(score > 1 ){
        document.querySelector('.display-message').textContent = "you guess larger number than the hidden number";
        //score=score-1;
        score--;
        document.querySelector('.score-number').textContent = score;
        }else{
            document.querySelector('.display-message').textContent = "game over...";
            document.querySelector('.score-number').textContent = 0;
        }
    }
    else if(thoughts < number){
        if(score > 1){
        document.querySelector('.display-message').textContent = "you guess smaller number than the hidden number";
        score--;
        document.querySelector('.score-number').textContent = score;
     }else{
        document.querySelector('.display-message').textContent = "game over...";
        document.querySelector('.score-number').textContent = 0;
     }
    }
});
// again button //
document.querySelector('.again').addEventListener('click',function(){
  let score=20;
    document.querySelector('.display-message').textContent='start guessing...';
    document.querySelector('.think').textContent='?';
    document.querySelector('.number-box').value='';
    document.querySelector('.score-number').textContent =score;
    document.querySelector('.highscore-number').textContent=highscore;
});


