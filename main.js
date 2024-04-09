let questions=[
    {
        question:"What is markup language of browser",
        options: ['html','css','javascript','python'],
        answer:'html'
    },
    {
        question:"Which one of these is not javascript framework or library",
        options: ['react','vue','laravel','angular'],
        answer:'laravel'

    },
   
    {
        question: "What does HTML stand for?",
        options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language'],
        answer: 'Hyper Text Markup Language'
      },
      {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ['margin', 'padding', 'border', 'spacing'],
        answer: 'margin'
      },
      {
        question: "What does CSS stand for?",
        options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        answer: 'Cascading Style Sheets'
      },
      {
        question: "Which programming language is used for web development?",
        options: ['JavaScript', 'Python', 'Java', 'C#'],
        answer: 'JavaScript'
      }
  

]

let questionIndex=-1;
let score=0;
let object_ques=-1;

let btnforque=document.querySelectorAll(".option button")

btnforque.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.textContent==object_ques.answer){
            score++
            document.querySelector(".score").textContent=`Your Score:${score}`
        }


        questionIndex++;

        if(questionIndex>questions.length-1){
            document.querySelector(".questxt").textContent="quiz over"
            document.querySelector(".score").textContent=`Your Score:${score}/6`

            document.querySelector(".option1").textContent=""
            document.querySelector(".option2").textContent=""
            document.querySelector(".option3").textContent=""
            document.querySelector(".option4").textContent=""

        }

        object_ques = questions[questionIndex];
    
        document.querySelector(".questxt").textContent = object_ques.question;

        document.querySelector(".option1").textContent=object_ques.options[0];
        document.querySelector(".option2").textContent=object_ques.options[1];
        document.querySelector(".option3").textContent=object_ques.options[2];
        document.querySelector(".option4").textContent=object_ques.options[3];

    })
  
})
  