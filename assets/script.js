//Capturing HTML elements to manipulate via DOM
//Creating variables to be used and inserted into later functions
var startButton = document.querySelector("#start-btn");
var introParagraph = document.querySelector("#intro-quiz");
var questionContainerElement = document.querySelector("#question-container");
var timer = document.querySelector("#timer");
var quizTime = 100 
var questionEl = document.querySelector("#question")
var button1 = document.querySelector("#btn-1")
var button2 = document.querySelector("#btn-2")
var button3 = document.querySelector("#btn-3")
var button4 = document.querySelector("#btn-4")
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
    //if an if stament needs to be produced to stop the timer at 0 
 
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
  
document.querySelector("#btn-3").addEventListener("click",updateTimeWrongAnswer);

}

//Quiz questions 
var quizQ = [
    { question:"2+2 = ?",
      choice1:"3",
      choice2:"1",
      choice3:"5",
      choice4:"4",
      correctAnswer:"btn-4",
    },

    { question:"What color is the sky?",
        choice1:"blue",
        choice2:"red",
        choice3:"green",
        choice4:"violet",
        correctAnswer:"btn-1",
      },

      { question:"What can fly?",
        choice1:"dog",
        choice2:"Rat",
        choice3:"bird",
        choice4:"cat",
        correctAnswer:"btn-3",
      },

      { question:"10-7=?",
        choice1:"3",
        choice2:"2",
        choice3:"8",
        choice4:"5",
        correctAnswer: "btn-1",
      },

      { question:"What lives in water?",
        choice1:"squirrel",
        choice2:"fish",
        choice3:"nissan skyline",
        choice4:"fox",
        correctAnswer:"btn-2",
      },
];
//the quizQ.length value  will be the total index of the quizQ array which will be an interger 
var lastQuestionIndex = quizQ.length;
var currentQuestionIndex = 0;
var correct;
//Setting function to display 1 of the 5 questions in the quizQ array, by using the index of the currentQuestinIndex variable and the lastQuestionIndex variable and setting them in an if statment 
function askQuestion(){
    if (currentQuestionIndex == lastQuestionIndex){
        return false 
    }
    var currentQuestion = quizQ[currentQuestionIndex];
    questionEl.innerHTML =

}
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
