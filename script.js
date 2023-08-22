const quizData=[
    {
        question: "Which language runs in a web browser",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d",
    },
    {
        question: "Which Javascript is an _______ language?",
        a:"Object Oriented",
        b:"Object Based",
        c:"Procedural",
        d:"None of the above",
        correct:"a",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a:"var",
        b:"let",
        c:"both A and B",
        d:"None of the above",
        correct:"c",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a:"getElementById()",
        b:"getElementByClassName()",
        c:"both A and B",
        d:"None of the above",
        correct:"c",
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a:"const",
        b:"let",
        c:"var",
        d:"constant",
        correct:"a",
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        a:"document.write()",
        b:"console.log()",
        c:"window.alert()",
        d:"All of the above",
        correct:"d",
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a:"Boolean",
        b:"Undefined",
        c:"Object",
        d:"Integer",
        correct:"c",
    },
    {
        question: "The function and var are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        correct:"c",
    },
    {
        question: "Which of the following type of a variable is volatile?",
        a:"Immutable variable",
        b:"Dynamic variable",
        c:"Volatile variable",
        d:"Mutable variable",
        correct:"d",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of values",
        b:"It is an ordered list of object",
        c:"It is an ordered list of string",
        d:"It is an ordered list of functions",
        correct:"a",
    },
];
const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0
loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if (answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',() => {
    const answer=getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})