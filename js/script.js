var startbutton = document.getElementById('start-button');
var welcomescreen = document.body.querySelector("#welcome-screen");
var quiz = document.getElementById('quiz-questions');
var answers = document.body.querySelector("#answers");
var endpage = document.body.querySelector("#end-page");
var feedback = document.body.querySelector("#feedback");
var initialentry = document.body.querySelector("#initials");
var submitbutton = document.body.querySelector("#submit");
var questionindex = 0;
var time = 75;
var timer = document.getElementById('time');
var timershow;



function hidestart () {  
startbutton.setAttribute("class", "display");
welcomescreen.setAttribute("class", "display");
console.log(quizquestions)
quizstarts ();
}
startbutton.addEventListener("click", hidestart);


//and the first question pops up 
function quizstarts () {
    timershow = setInterval(clock, 1000);
    timer.textContent = time;
    quiz.removeAttribute("class");
    //array for questions
    var questionup = quizquestions[questionindex];
    //question is updated 
    var linequestion = document.getElementById('question');
    linequestion.textContent = questionup.questiontitle;
    
    //clear answers
    answers.innerHTML = '';
    
    //loop for choices
    for (var i = 0; i < questionup.choices.length; i++){
    //created a new button
    var options = questionup.choices[i];
    var getbutton = document.createElement('button');
    getbutton.setAttribute('class', 'options');
    getbutton.setAttribute('value', options);
    
    getbutton.textContent = i + 1 + '. ' + options;
    
    //on page
    answers.appendChild(getbutton);
      }
    }
//checking answers 
function selectionmade(event) {
        var button = event.target;


//check for wrong answer 

if (button.value !== quizquestions[questionindex].answer) 
{
    time -= 15;

    if (time <0) {
        time = 0;
    }
    //new displayed time
timer.textContent = time;
//indicates wrong choice
feedback.textContent = 'Incorrect';
}
else {
    feedback.textContent = 'Correct';
}
//shows correct/incorrect on page for half second
feedback.setAttribute('class', 'feedback');
let flashresponse = (function () {
    feedback.setAttribute('class', 'hide-feedback');}, 1000);

    //shows next question
    questionindex++;

    //checks time
    if (time <=0 || questionindex === quizquestions.length) {
        endquiz();
    }
    else {
        quizstarts ();
    }
    }

    function endquiz () {
        //stops timer
        clearInterval (timershow);
        endpage.removeAttribute('class');
        //score
        var score = document.getElementById('score-final');
        score.textContent = time;
        quiz.setAttribute('class', 'hide');
    }

    function clock() {
        // update time
      time--;
      timer.textContent = time;

  // time runs out
  if (time <= 0) {
    endquiz();
  }
   }
    
   function savescore() {
    // get value of input box
   
    var initial = initialentry.value.trim();
  
    // make sure value wasn't empty
    if (initial !== '') {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        initial: initial,
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = 'highscores.html';
    }
  }
  
  function checkenter(event) {
    
    if (event.key === 'Enter') {
      savescore();
    }
  }
  submitbutton.onclick = savescore;
  
    answers.onclick = selectionmade;
    startbutton.onclick = quizstarts;
    initialentry.onkeyup = checkenter;