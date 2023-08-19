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
      question: "3.Chola’s capital city was ___",
      options: [" Kanchipuram", " Madurai", "Tiruchy", "Tanjore"],
      correctAnswer: "Tanjore"
    },
    {
      question: "4.What is 7 + 3?",
      options: ["10", "12", "14", "8"],
      correctAnswer: "10"
    },
    {
      question: "5.The founder of the Sikh religion was ___",
      options: ["Guru Nanak", " Tukaram", "Ramanada", " Kabir"],
      correctAnswer: "Guru Nanak"
    },

    {
        question: "6.Who is the prime minister of india",
        options: ["Narendra Modi", "Rahul gandhi", "KCR", "mamatha benergi"],
        correctAnswer: "Narendra Modi"
      },
      {
        question: "7.What is our natioal bird?",
        options: ["crow", "sparrow", "peacock", "pigeon"],
        correctAnswer: "peacock"
      },
      {
        question: "8.What does js stands for?",
        options: ["javastand", "javascript", "javascope", "javaschool"],
        correctAnswer: "javascript"
      },
      {
        question: "9.Duration of basketball match both before & after the break?",
        options: ["25 minutes", " 35 minutes", "45 minutes", "60 minutes"],
        correctAnswer: "25 minutes"
      },
  ];
  
let questions = document.getElementById("question");
let opt1 = document.getElementById('btn1');
let opt2 = document.getElementById('btn2');
let opt3 = document.getElementById('btn3');
let opt4 = document.getElementById('btn4');
let score =document.getElementById("score");
let subBtn =  document.getElementById("submit-btn");
let currentQuestion =0;
let scores = 0;
function displayQuestions(){
    if(currentQuestion < QuizData.length){
        questions.innerHTML = QuizData[currentQuestion].question;
    }
    else{
        //  location.reload();
         showscore.style.display='block';
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
 score.innerHTML =scores++ +1;
  console.log(score.innerHTML);
   alert(" Correct");
}
else{
  score.innerHTML=score.innerHTML;
  alert("your answer is wrong");
}
showscore.innerHTML = `Your final score is ${scores}/9`
}
let showscore=document.getElementById('showscore');








