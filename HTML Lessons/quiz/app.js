const questionEl = document.getElementById('questionEl')
const answerEl = document.getElementById('answerEl')
const labelEl = document.querySelectorAll("#answerEl label")
const inputEl = document.querySelectorAll("#answerEl input")
const btnNext = document.getElementById("next")
const id = document.getElementById("id")
const points = document.getElementById("points")
let data = [
    {
        id: 1,
        question : "HTML Code is used to?",
        answer : "Structure the content of a web page",
        options: [
            "Structure the content of a web page",
            "Work with CSS and Javascript ", 
            "draw", 
            "learn web development"],
    },

    {
        id: 2,
        question: "What is HTML",
        answer: "HyperText Markup Language",
        options: ["HyperText Markup Language", "Programming Language", "Hypertext Library", "Markup Language"]
    },

    {
        id: 3,
        question: "Web browsers read HTML code to display the resulting webpage",
        answer: "True",
        options: [
            "False",
            "Sometimes",
            "True",
            "I do not know"
        ]
    },

    {
        id: 4,
        question: "Which of the following is a valid HTML tag",
        answer: "<p>",
        options: [
            "{p}",
            "[p]",
            "<p>",
            "(p)"
        ]
    },

    {
        id: 5,
        question: "Select the correct statement",
        answer: "Image element dont require a closing tag",
        options: [
            "Image element dont require a closing tag",
            "Headings are examples of empty tag",
            "HTML tags can have content",
            "<a> tag is a block level element"
        ]
        
    },

    {
        id: 6,
        question: "What is the correct extension of HTML files?",
        answer: ".html",
        options: [
            ".css",
            ".index",
            ".js",
            ".html",

        ]
    },

    {
        id: 7,
        question: "Where should you put the title tag?",
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
        question: "Which of these creates a comment?",
        answer: "<!-- This is a comment -->",
        options: [
            "<-- This is a comment -->",
            "<!-- This is a comment -->",
            "<!-- This is a comment >",
            "<comment> This is a comment </comment>",
        ]
    },

    {
        id: 9,
        question: "What tag is used to create a line-break without an extra space between the text block?",
        answer: "<br />",
        options: [
            "<br />",
            "<linebreak />",
            "<break />",
            "<lb />"
        ]
    },

    {
        id: 10,
        question: "Which two tags makes a text visually bold?",
        answer: "<b> and <strong>",
        options: [
            "<sub> and <sup>",
            "<bold> and <strong>",
            "<b> and <strong>",
            "<i> and <em>"
        ]
    },

    {
        id: 11,
        question: "Generally, HTML Elements consists of?",
        answer: "Opening tag, content and closing tag",
        options: [
            "Opening tag, content and end tag",
            "Opening tag, content and closing tag",
            "Only tags",
            "Only content"
        ]
    },

    {
        id: 12,
        question: "What tag should be used to add an image?",
        answer: "<img />",
        options: [
            "<image />",
            "<pic />",
            "<img />",
            "<picture />"
        ]
    },

    {
        id: 13,
        question: "What attribute should be used to add an image?",
        answer: "src",
        options: [
            "src",
            "url",
            "location",
            "address"
        ]
    },

    {
        id: 14,
        question: "Which tag is used to define a list item?",
        answer: "<li>",
        options: [
            "<ul>",
            "<ol>",
            "<item>",
            "<li>",
        ]
    },

    {
        id: 15,
        question: "What tag is used to create a link?",
        answer: "<a>",
        options: [
            "<link>",
            "<href>",
            "<a>",
            "<visit>"
        ]
    }, 
];

let qCount = 0

let currentQuestion = 0;

const user = [{
    score: 1,
}];

const model = {
    init : ()=>{
        // if (!localStorage.data) {
        //     localStorage.data = JSON.stringify(data);
        // }
        
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
        view.getQuestions(data[currentQuestion])
        
    },

    submit : (e)=>{
        e.preventDefault()
        qCount++;

        let el = document.getElementsByTagName("input");
        for (i=0; i<el.length; i++){
            if (el[i].type ="radio"){
                if(qCount>14){
                    document.getElementById("next").disabled = true
                }

                if(el[i].checked){
                    if (el[i].value == data[currentQuestion].answer){
                        model.modifyUserScore();  
                        if(qCount>14){
                            let score = JSON.parse(localStorage.user);
                            return alert("Your score: " + score[0].score)
                        }

                    }
                }
            }
        }
        if (currentQuestion<data.length-1){
            ++currentQuestion
            console.log(currentQuestion)
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