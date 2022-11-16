var startbutton = document.getElementById('start-button');
var welcomescreen = document.body.querySelector("#welcome-screen");
var quiz = document.getElementById('quiz-questions');
var answers = document.body.querySelector("#answers");
var endpage = document.body.querySelector("#end-page");
var feedback = document.body.querySelector("#feedback");
var questionindex = 0;
var time = 75;
var timer;
//high scores
//timer

//when the start button is selected, the start screen disappears


function hidestart () {  
startbutton.setAttribute("class", "display");
welcomescreen.setAttribute("class", "display");
console.log(quizquestions)
quizstarts ();
}
startbutton.addEventListener("click", hidestart);


//and the first question pops up 
function quizstarts () {
    //starts timer
    var timer = setInterval(clock, 1000);
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
//check to make sure the click is a button- nothing happens if not 
if (!button.matches('.choice')) {
    return;
}

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
flashresponse (function () {
    feedback.setAttribute('class', 'hide feedback');}, 1000);

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
    
    
    //show random deck of questions

    
    //tally score
    
    //subtract 15 points 
    
    //enter initials 
    
    
    
    // Access toggle switch HTML element
    
    
    