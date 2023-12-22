let questions=[
    {
        question:"Who is secretery of gokuldham?",
        options: ['jethalal','abdul','mehta saab','bhide'],
        answer:'bhide'
    },
    {
        question:"What was the name of dog that gokuldham adopted?",
        options: ['tommy','bruno','sheru','sher'],
        answer:'sheru'

    },
    {
        question:"Other than sakaram scooter who bhide considers his brother?",
        options: ['tution board','suvichar board','chasma','none'],
        answer:'suvichar board'
    },{
        question:"How many countries jethalal been to?",
        options: [3,4,5,6],
        answer:5
    },{
        question:"How many siblings hathi bhai has?",
        options: [0,1,2,3],
        answer:2
    },{
        question:"When bawri was first introduced which vegetable price was going up?",
        options: ['onion','tomato','peas','potato'],
        answer:'onion'

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
  