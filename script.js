const question = [
  {
    question: "What is capital of france ?",
    answers: [
      {text:"Paris", correct:true},
      {text:"Delhi", correct:false},
      {text:"Moscow", correct:false},
      {text:"Tokyo", correct:false},
      ]
  },
  {
    question: "Which animal is known as the Ship of the Desert?",
    answers: [
      {text:"Cow", correct:false},
      {text:"Camel", correct:true},
      {text:"Horse", correct:false},
      {text:"Sand Snake", correct:false},
      ]
  },
  {
    question: "What is capital of India ?",
    answers: [
      {text:"Paris", correct:false},
      {text:"Delhi", correct:true},
      {text:"Moscow", correct:false},
      {text:"Beijieng", correct:false},
      ]
  },
  {
    question: "What is the smallest prime number",
    answers: [
      {text:"2", correct:true},
      {text:"0", correct:false},
      {text:"1", correct:false},
      {text:"4", correct:false}
    ]
  }
  ];

  const quiz = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = " Next ";
    showQuestion();
  }

  function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  function resetState(){
    nextButton.style.display = "block";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
function showScore(){
  resetState();
  questionElement.innerHTML =`You scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < question.length ){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click",() => {
  if(currentQuestionIndex < question.length ){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();

  
