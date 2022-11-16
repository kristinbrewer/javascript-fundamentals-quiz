var startbutton = document.getElementById('start-button');
var welcomescreen = document.body.querySelector("#welcome-screen");
var quiz = document.getElementById('quiz-questions');
var answers = document.body.querySelector("#answers");
var endpage = document.body.querySelector("#end-page");

var questionindex = 0;

//high scores
//timer

//when the start button is selected, the start screen disappears


function hidestart () {  
quiz === quizquestions;
startbutton.setAttribute("class", "display");
welcomescreen.setAttribute("class", "display");
quiz.removeAttribute("class");

}
startbutton.addEventListener("click", hidestart);


//and the first question pops up 
function quizstarts () {
    //array for questions
    var questionup = quizquestions[questionindex];
    //question is updated 
    var linequestion = document.getElementById('question');
    linequestion.textContent = questionup.title;
    
    //clear answers
    answers.innerHTML = '';
    
    //loop for choices
    for (var i = 0; i < questionup.options.length; i++){
    //created a new button
    var options = questionup.options[i];
    var getbutton = document.createElement('button');
    getbutton.setAttribute('class', 'options');
    getbutton.setAttribute('value', options);
    
    getbutton.textContent = i + 1 + '. ' + options;
    
    //on page
    answers.appendChild(getbutton);
      }
    }
    
    
    
    //show random deck of questions
    //for loop
    
    //tally score
    
    //subtract 15 points 
    
    //enter initials 
    
    
    
    // Access toggle switch HTML element
    
    
    