alert("Welcome to Quiz game..!\nAnswer all 6 questions ");
let QuizData = [
    {
      question: "1.What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "2.Which planet is closest to the Sun?",
      options: ["Venus", "Earth", "Mars", "Mercury"],
      correctAnswer: "Mercury"
    },
    {
      question: "3.What is 7 + 3?",
      options: ["10", "12", "14", "8"],
      correctAnswer: "10"
    },
    {
        question: "4.Who is the prime minister of india",
        options: ["Narendra Modi", "Rahul gandhi", "KCR", "mamatha benergi"],
        correctAnswer: "Narendra Modi"
      },
      {
        question: "5.What is our natioal bird?",
        options: ["crow", "sparrow", "peacock", "pigeon"],
        correctAnswer: "peacock"
      },
      {
        question: "6.What does js stands for?",
        options: ["javastand", "javascript", "javascope", "javaschool"],
        correctAnswer: "javascript"
      }
  ];
  
let questions = document.getElementById("question");
let opt1 = document.getElementById('btn1');
let opt2 = document.getElementById('btn2');
let opt3 = document.getElementById('btn3');
let opt4 = document.getElementById('btn4');
let score =document.getElementById("score");
let subBtn =  document.getElementById("submit-btn");
let currentQuestion =0;
let scores = 1;
function displayQuestions(){
    if(currentQuestion < QuizData.length){
        questions.innerHTML = QuizData[currentQuestion].question;
    }
    else{
         document.location.reload();
    }
        opt1.innerHTML = QuizData[currentQuestion].options[0];
        opt2.innerHTML = QuizData[currentQuestion].options[1];
        opt3.innerHTML = QuizData[currentQuestion].options[2];
        opt4.innerHTML = QuizData[currentQuestion].options[3];
     
       
        
 } 
       
   displayQuestions();
subBtn.addEventListener('click',()=>{
    currentQuestion++;
    displayQuestions();
})
function result(e){
if( e.innerHTML == QuizData[currentQuestion].correctAnswer){
 score.innerHTML =scores++;
  console.log(score.innerHTML);
  
  alert(" Correct");
}
else{
  score.innerHTML=0;
  alert("your answer is wrong");
}
}





