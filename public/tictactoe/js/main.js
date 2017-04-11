var turnCount = 0;

var button = [];
for (var i = 1; i < 10; i++) button[i] = document.getElementById('canvas'+i);

var ctx = [];
for (var i = 1; i < 10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for (var i = 1; i < 10; i++) bDisabled[i] = false;

var isResult = false;
var content = [];

// x = the clicked canvas button.
function loop(x){
  if(bDisabled[x] == false){
    bDisabled[x] = true;
    button[x].style.opacity = 0.7;

// content[x] is used to decide winner with winner function.
    content[x] = 'x';
    turnCount ++;
// rotateY created animation when button is clicked
    button[x].style.Transform = "rotateY(180deg)"; 
    button[x].style.webkitTransform = "rotateY(180deg)"; 
    button[x].style.msTransform = "rotateY(180deg)"; 
    button[x].style.mozTransform = "rotateY(180deg)"; 
    button[x].style.oTransform = "rotateY(180deg)"; 

  setTimeout(function(){
    ctx[x].lineWidth = 3;
    ctx[x].beginPath();
    ctx[x].moveTo(10,10);
    ctx[x].lineTo(90,90);
    ctx[x].moveTo(90,10);
    ctx[x].lineTo(10,90);
    ctx[x].stroke();
    ctx[x].closePath();
    if (turnCount < 9 && isResult == false) computerTurn();
    checkWinner();
  }, 300)};
}  

function computerTurn(){
  var r = Math.random();
    if(r < 0.1 && !bDisabled[1]) draw0Steps(1);
    else if(r < 0.2 && !bDisabled[2]) draw0Steps(2);
    else if(r < 0.3 && !bDisabled[3]) draw0Steps(3);
    else if(r < 0.4 && !bDisabled[4]) draw0Steps(4);
    else if(r < 0.5 && !bDisabled[5]) draw0Steps(5);
    else if(r < 0.6 && !bDisabled[6]) draw0Steps(6);
    else if(r < 0.7 && !bDisabled[7]) draw0Steps(7);
    else if(r < 0.8 && !bDisabled[8]) draw0Steps(8);
    else if(r < 0.1 && !bDisabled[9]) draw0Steps(9);
    else computerTurn();
  }
    
function draw0Steps(x){
  bDisabled[x] = true;
  button[x].style.opacity = 0.7;
  content[x] = 'o';
  turnCount ++;
  button[x].style.webkitTransform = "rotateX(180deg)";

  setTimeout(function(){
   ctx[x].beginPath();
   ctx[x].lineWidth = 3;
   ctx[x].arc(50,50,34,0,Math.PI*2,false);
   ctx[x].stroke();
    ctx[x].closePath();
  }, 300);
};

  function checkWinner(){
    if (isResult == false){
      if (content[1] == 'x' && content[2] == 'x' && content[3] == 'x') showWinner('won');
      else if (content[4] == 'x' && content[5] == 'x' && content[6] == 'x') showWinner('won');
      else if (content[7] == 'x' && content[8] == 'x' && content[9] == 'x') showWinner('won');
      else if (content[1] == 'x' && content[4] == 'x' && content[7] == 'x') showWinner('won');
      else if (content[2] == 'x' && content[5] == 'x' && content[8] == 'x') showWinner('won');
      else if (content[3] == 'x' && content[6] == 'x' && content[9] == 'x') showWinner('won');
      else if (content[1] == 'x' && content[5] == 'x' && content[9] == 'x') showWinner('won');
      else if (content[3] == 'x' && content[5] == 'x' && content[7] == 'x') showWinner('won');
      else if (content[1] == 'o' && content[2] == 'o' && content[3] == 'o') showWinner('lost');
      else if (content[4] == 'o' && content[5] == 'o' && content[6] == 'o') showWinner('lost');
      else if (content[7] == 'o' && content[8] == 'o' && content[9] == 'o') showWinner('lost');
      else if (content[1] == 'o' && content[4] == 'o' && content[7] == 'o') showWinner('lost');
      else if (content[2] == 'o' && content[5] == 'o' && content[8] == 'o') showWinner('lost');
      else if (content[3] == 'o' && content[6] == 'o' && content[9] == 'o') showWinner('lost');
      else if (content[1] == 'o' && content[5] == 'o' && content[9] == 'o') showWinner('lost');
      else if (content[3] == 'o' && content[5] == 'o' && content[7] == 'o') showWinner('lost');
      else if (turnCount == 9) showWinner('d');
    };
  };

  function showWinner(winner){
    setTimeout(function(){
      isResult = true;
      if(winner == 'won'){
        $("#won").css("display", "block");
      }else if(winner == 'lost'){
        $("#lost").css("display", "block");  
      }else if(winner == 'd'){
        $("#draw").css("display", "block");
      }
      for (var i = 1; i < 10; i++) bDisabled[i] = true;
    }, 350);
  };






