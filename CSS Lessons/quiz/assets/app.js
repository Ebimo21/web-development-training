const questionEl = document.getElementById('questionEl')
const answerEl = document.getElementById('answerEl')
const labelEl = document.querySelectorAll("#answerEl label")
const inputEl = document.querySelectorAll("#answerEl input")
const btnNext = document.getElementById("next")
const btnPrev = document.getElementById("prev")
const id = document.getElementById("id")
const points = document.getElementById("points")
let data = [
    {
        id: 1,
        question : "What is CSS?",
        answer : "Cascading Style Sheet",
        options: [
            "Style Sheet",
            "Casket Style Sheet ", 
            "Cascading Style Sheet", 
            "Styling"],
    },

    {
        id: 2,
        question: "If some properties have been defined for the same selector (element) in different style sheets",
        answer: "The value from the last read style sheet will be used",
        options: ["The default will be used", "None will be used", "The value of the first read will be used", "The value from the last read style sheet will be used"]
    },

    {
        id: 3,
        question: "Which is the correct syntax",
        answer: '<link href="assets/style.css" type="text/css" rel="stylesheet" />',
        options: [
            '<link href="assets/style.css" rel="stylesheet" />',
            '<link href="assets/style.css" type="text/css" />',
            '<link href="assets/style.css" type="text/css" rel="stylesheet" />',
            'Hard to tell'
        ]
    },

    {
        id: 4,
        question: 'Which is not a unit in CSS',
        answer: "MB",
        options: [
            "PX",
            "MB",
            "VH",
            "REM"
        ]
    },

    {
        id: 5,
        question: "CSS color property is used to set the _?",
        answer: "text color",
        options: [
            "background color",
            "image filter color",
            "text color",
            "shadow color"
        ]
        
    },

    {
        id: 6,
        question: "What is the correct extension of CSS files?",
        answer: ".css",
        options: [
            ".scss",
            ".index",
            ".css",
            ".js",

        ]
    },

    {
        id: 7,
        question: "Where should you put the link tag?",
        answer: "Between the head tag",
        options: [
            "Between the body tag",
            "Before the html tag",
            "Between the head tag",
            "After the closing html tag"
        ]
    },

    {
        id: 8,
        question: "Which of these creates a comment in CSS?",
        answer: "/* This is a comment */ ",
        options: [
            "/* This is a comment */ ",
            "\* This is a comment *\ ",
            "*\ This is a comment \* ",
            "*/ This is a comment /*",
        ]
    },

    {
        id: 9,
        question: "'Display:flex;' is added to which node (element)?",
        answer: "Parent node",
        options: [
            "Child node",
            "None",
            "Content node",
            "Parent node",
        ]
    },

    {
        id: 10,
        question: "'Justify-Content' is added to which node (element)?",
        answer: "Parent node",
        options: [
            "Parent node",
            "None",
            "Content node",
            "Child node",
        ]
    },

    {
        id: 11,
        question: "'flex-basis' is added to which node (element)?",
        answer: "Child node",
        options: [
            "Content node",
            "Parent node",
            "Child node",
            "None",
        ]
    },

    {
        id: 12,
        question: "'Align-content' is added to which node (element)?",
        answer: "Parent node",
        options: [
            "Content node",
            "Parent node",
            "Child node",
            "None",
        ]
    },

    {
        id: 13,
        question: "'div p' - selects which elements ",
        answer: "All p elements inside a div element",
        options: [
            "All div and p elements",
            "All p elements that are direct children of a div",
            "All p elements inside a div element",
            "All p elements"
        ]
    },

    {
        id: 14,
        question: "'div > p' - selects which elements",
        answer: "All p elements that are direct children of a div",
        options: [
            "All div and p elements",
            "All p elements that are direct children of a div",
            "All p elements inside a div element",
            "All p elements"
        ]
    },

    {
        id: 15,
        question: "'#div > p' - selects which elements",
        answer: "All p elements that are direct children of a the element with an id of div",
        options: [
            "All p elements that are direct children of a the element with an id of div",
            "All p elements that are direct children of a div element",
            "All p elements inside a div element element with an id of div",
            "All p elements that are direct children of a div"
        ]
    }, 
];

let qCount = 0

let currentQuestion = 0;

let userAnswer = [];

const user = [{
    score: 0,
}];

const model = {
    init : ()=>{
        
        if (!localStorage.user) {
            localStorage.user = JSON.stringify(user);
        }
    },

    modifyUserScore : () =>{
        const user = octopus.getUser()
        const modifiedUser = user.map((user)=>  {
            user.score == user.score++;
            return user
        })
        localStorage.user = JSON.stringify(modifiedUser)
    },

    getUser : ()=>{
        return JSON.parse(localStorage.user)
    }
}

const octopus = {
    init : ()=>{
        model.init()
        view.init()
    },

    getUser: ()=>{
        return model.getUser();
    }
}

const view = {
    init : () =>{
        btnNext.addEventListener("click", view.submit)
        btnPrev.addEventListener("click", view.prev)
        view.getQuestions(data[currentQuestion])
    },

    prev : (e)=>{
        e.preventDefault()
        if (currentQuestion<1){
            currentQuestion = currentQuestion
            
        }else{
            --currentQuestion
        }
        view.getQuestions(data[currentQuestion])
    },

    anyalyse : () =>{
        

        for(let i=0; i<userAnswer.length; i++){
            if(userAnswer[i] == data[i].answer){
                model.modifyUserScore();  
            }
        }

        let score = JSON.parse(localStorage.user);
        alert("Your score: " + score[0].score)

    },

    submit : (e)=>{
        e.preventDefault()
        qCount++;

        let form = new FormData(answerEl)

        userAnswer[currentQuestion] = form.get("answer");

        if(qCount>14){
            btnNext.disabled = true;
            btnPrev.disabled = true;
            view.anyalyse()
        }

        // let el = document.getElementsByTagName("input");
        // for (i=0; i<el.length; i++){
        //     if (el[i].type ="radio"){
        //         if(qCount>14){
        //             document.getElementById("next").disabled = true
        //         }

        //         if(el[i].checked){
        //             if (el[i].value == data[currentQuestion].answer){
        //                 model.modifyUserScore();  
        //                 if(qCount>14){
        //                     let score = JSON.parse(localStorage.user);
        //                     return alert("Your score: " + score[0].score)
        //                 }

        //             }
        //         }
        //     }
        // }
        if (currentQuestion<data.length-1){
            ++currentQuestion
        }else{
            currentQuestion = currentQuestion
        }
        view.getQuestions(data[currentQuestion])
        },

    render : (question)=>{
        let opt = question.options
        questionEl.innerText = ""
        questionEl.innerText = question.question
        id.innerText = question.id
        points.innerText = JSON.parse(localStorage.user)[0].score

        for (i=0; opt.length>i; i++){
            labelEl[i].innerText = opt[i]
            inputEl[i].value = opt[i]
        }
    },

    getQuestions : (question) =>{
        view.render(question)

        
    }
}


octopus.init()