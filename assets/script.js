//Capturing HTML elements to manipulate via DOM
//Creating variables to be used and inserted into later functions
var startButton = document.querySelector("#start-btn");
var introParagraph = document.querySelector("#intro-quiz");
var questionContainerElement = document.querySelector("#question-container");
var timer = document.querySelector("#timer");
var quizTime = 100 
var question = document.querySelector("#question")
//To display Quiz time 
timer.textContent = quizTime 
//Goals get timer to reduce by 20 and end at zero with each wrong question
function updateTime(){ 
    quizTime = quizTime - 1
    timer.textContent = quizTime 
}
function updateTimeWrongAnswer(){ 
    quizTime = quizTime - 20
    timer.textContent = quizTime 
}

//Event listener the record when the start button is clicked to execute the the start game function 
document.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  //hide class is being used to hide the start button and intro paragraph after the start button is clicked 
  startButton.classList.add("hide");
  introParagraph.classList.add("hide");
  questionContainerElement.classList.remove("hide");
    
    //askQuestion()
  setNextQuestion();
document.querySelector("#btn-3").addEventListener("click",updateTimeWrongAnswer);

}

function askQuestion(num){
    currentQuestion = quizQuestions[num]
    question.textContent = currentQuestion.question
    //choice1 = currentQuestion.choices[0]

    //answer = currentQuestion.answer

    //if (choice == sner)
 }


//var quizQuestions = [
    //{
       // question: 'What is Hyper Text Mark Up Language?',
        //answers: [
            //{ text: "HTML", correct:true}
           //{ text: "JavaScript", correct:false}
            //{ text: "PS2", correct:false}
            //{ text: "CSS", correct:false}
         //],
        

    //},
    



function setNextQuestion() {

}

function selectAnswer(){

}


//Set interval/Set Timeout research
