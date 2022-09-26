const questionEl = document.getElementById('questionEl');
const answerEl = document.getElementById('answerEl');
const labelEl = document.querySelectorAll("#answerEl .label");
const inputEl = document.querySelectorAll("#answerEl input");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const id = document.getElementById("id");
const points = document.getElementById("points");
let data = [
    {
        id: 1,
        question : "Which is correct CSS syntax?",
        answer : "body {color:black;}",
        options: [
            "{ body; color=black;}",
            "body: color= black", 
            "body {color:black;}", 
            "(body color is black) "],
    },

    {
        id: 2,
        question: "Select the code below that uses CSS to configure a background color of #000000 for a web page.",
        answer: "body { background-color: #000000; }",
        options: [
            "body { background-color: #000000; }",
            "body { bgcolor: #000000; }", 
            "document { background­-page: #000000; }", 
            "None of these"]
    },

    {
        id: 3,
        question: "Which line of code correctly places a gif image named 'tiger' into a webpage?",
        answer: '<img src="tiger.gif" alt="BengalTiger" />',
        options: [
            '<img src="tiger" alt="BengalTiger" />',
            '<img gif=tiger alt="BengalTiger">',
            '<image source="tiger.gif" alt=BengalTiger" />',
            '<img src="tiger.gif" alt="BengalTiger" />'
        ]
    },

    {
        id: 4,
        question: 'If you want to have more than one property for a CSS selector, what character separates them?',
        answer: "semi-colon (;)",
        options: [
            "comma (,)",
            "semi-colon (;)",
            "colon (:)",
            "dash (-)"
        ]
    },

    {
        id: 5,
        question: "How do we tell Javascript that we are working with a variable ",
        answer: "let",
        options: [
            "variable",
            "create",
            "let",
            "constant"
        ]
        
    },

    {
        id: 6,
        question: "Which of these variable names will cause an error",
        answer: "04data",
        options: [
            "04data",
            "userAge",
            "$account",
            "_count",

        ]
    },

    {
        id: 7,
        question: "Which of these is a compararism operator",
        answer: ">=",
        options: [
            ">=",
            "*",
            "-",
            "="
        ]
    },

    {
        id: 8,
        question: "Which of the following is an arithmetic operator",
        answer: "+",
        options: [
            "+",
            "#",
            "...",
            "&&",
        ]
    },

    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
        question: "Which of the following options declares a variable called 'varName'",
        answer: "let varName",
        options: [
            "let varname",
            "declare varName",
            "let varName",
            "varName = 'Hello World'",
        ]
    },

    {
        id: 13,
        question: "Which of these is not a JavaScript datatype?",
        answer: "integer",
        options: [
            "string",
            "number",
            "object",
            "integer"
        ]
    },

    {
        id: 14,
        question: "What does the expression (5 == '5') evaluate to?",
        answer: "true",
        options: [
            "true",
            "false",
            "undefined",
            "null",
        ]
    }, 

    {
        id: 15,
        question: "Given that userName = 'name', What does the expressions (name != userName), and (userName == 'name') evaluates to?",
        answer: "true, true",
        options: [
            "true, false",
            "false, true",
            "true, true",
            "false, false",
        ]
    }, 
];

let qCount = 0;

let currentQuestion = 0;

let userAnswer = [];

const user = [{
    score: 0,
}];

const model = {
    init : ()=>{ 
        if (!sessionStorage.user) {
            sessionStorage.user = JSON.stringify(user);
        }        
    },

    addUserScore : () =>{
        const user = octopus.getUser();
        const modifiedUserScore = user.map((user)=>  {
            user.score == user.score++;
            return user;
        })
        model.updateUserScore(modifiedUserScore);
    },

    updateUserScore: (user)=>{
        sessionStorage.user = JSON.stringify(user);
    },

    getUser : ()=>{
        return JSON.parse(sessionStorage.user);
    }
}

const octopus = {
    init : ()=>{
        model.init();
        view.init();
    },

    getUser: ()=>{
        return model.getUser();
    }
}

const view = {
    init : () =>{
        btnNext.addEventListener("click", view.submit);
        btnNext.addEventListener("submit", view.submit);
        btnPrev.addEventListener("click", view.prev);
        view.getQuestions(data[currentQuestion]);
    },

    prev : (e)=>{
        e.preventDefault()
        if (currentQuestion<1){
            currentQuestion = currentQuestion;
            
        }else{
            --currentQuestion;
        }
        view.getQuestions(data[currentQuestion]);
    },

    anyalyse : () =>{
        for(let i=0; i<userAnswer.length; i++){
            if(userAnswer[i] == data[i].answer){
                model.addUserScore();  
            }
        }

        let score = JSON.parse(sessionStorage.user);
        alert("Your score: " + score[0].score);
    },

    submit : (e)=>{
        e.preventDefault();
        qCount++;

        let form = new FormData(answerEl);

        userAnswer[currentQuestion] = form.get("answer");

        if(qCount>14){
            btnNext.disabled = true;
            btnPrev.disabled = true;
            view.anyalyse();
        }

        answerEl.reset();

        if (currentQuestion<data.length-1){
            ++currentQuestion;
        }else{
            currentQuestion = currentQuestion;
        }

        view.getQuestions(data[currentQuestion]);
    },

    render : (question)=>{
        let opt = question.options;
        questionEl.innerText = "";
        questionEl.innerText = question.question;
        id.innerText = question.id;
        points.innerText = JSON.parse(sessionStorage.user)[0].score;

        for (i=0; opt.length>i; i++){
            labelEl[i].innerText = opt[i];
            inputEl[i].value = opt[i];
        }
    },

    getQuestions : (question) =>{
        view.render(question);
    }
}


octopus.init();