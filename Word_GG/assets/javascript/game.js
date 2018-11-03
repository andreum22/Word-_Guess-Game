// Arry of Words 
const words = ['madona','mj','jt'];
// Choose words 
//
var randNum  = Math.floor(Math.random() * 3);
var choosenWord = words[randNum];
var rigthWord =[];
var wrongWord = [];
var underScore =[]; 

//generat a unerscores based on the length 

var docUnderScore = document.getElementsByClassName('underScores');
var docRightGess = document.getElementsByClassName('rigthGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
//=====================================
console.log(choosenWord);

var generateUnderscore = () => {
    var underScore = [];
    for (var i = 0; i < choosenWord.length; i++ ){
        underScore.push('_'); 
    }
    return underScore;
}
console.log (generateUnderscore());

  document.addEventListener('keypress',(event) => {
      //let keycode = event.keyCode;
      var keyword = String.fromCharCode(event.keyCode);
      //console.log(keyword); 
      if (choosenWord.indexOf(keyword) > -1) {
          rigthWord.push(keyword);
          underScore[choosenWord.indexOf(keyword)]= keyword;
          docUnderScore[0].innerHTML = underScore.join(' ');
          docRightGess[0].innerHTML =  rigthWord;

          if (underScore.join('') == choosenWord){
              alert ('you win');
          }
      }
      else{
          wrongWord.push(keyword);
          docWrongGuess[0].innerHTML = wrongWord; 
           
      } 
      docUnderScore[0].innerHTML = generateUnderscore().join(' ');

  }); 