//https://www.thequiz.com/50-questions-every-dragon-ball-z-fan-should-be-able-to-answer/
const QUESTION_CONSTANTS = {
    MAXQUESTIONS: 4
}

const ALL_QUESTIONS = [
    {
        question: "During the Saiyan Saga, how does Goku reach King Kai's planet?",
        answers: [
            {
                ans: "By making a wish with the Dragon Balls",
                correct: false,
            },
            {
                ans:   "By traveling along Snake Way",
                correct: true,
            },
            {
                ans: "By teleporting there instantly",
                correct: false,
            },
            {
                ans: "Via high speed Vehicle",
                correct: false
            }
          
        ]
    },
    {
        question: "What item is used to restore a wounded Z fighter to full health?",
        answers: [
            {
                ans: "Z Sword",
                correct: false,
            },
            {
                ans: "Saiyan hair",
                correct: false,
            },
            {
                ans: "Capsule Crop medicine",
                correct: false,
            },
            {
                ans: "Senzu Bean",
                correct: true
            }
          
        ]
    },
    {
        question: "What's the highest Super Saiyan level attained by Vegeta in DBZ?",
        answers: [
            {
                ans: "Super Saiyan I",
                correct: false
            },
            {
                ans: "Super Saiyan II",
                correct: true
            },
            {
                ans: "Super Saiyan III",
                correct: false
            },
            {
                ans: "Super Sayian IV",
                correct: false
            }

        ]
    },
    {
        question: "What's Goku's wife's name?",
        ansswers: [
            {
                ans: "Chi Cha",
                correct: false
            },
            {
                ans: "Chi Chi",
                correct: true
            },
            {
                ans: "Cha Cha",
                correct: false
            },
            {
                ans: "Chu Chu",
                correct: false
            }

        ]
    },
    {
        question: "Where is Goku when he transforms into a Super Saiyan for the first time?",
        ansswers: [
            {
                ans: "Planet Vegeta",
                correct: false
            },
            {
                ans: "Planet Earth",
                correct: false
            },
            {
                ans: "Planet Namek",
                correct: true
            },
            {
                ans: "King Kai's Plenet",
                correct: false
            }

        ]
    },
    
]


function Question(question, answers = [], key=null) {
    this.question = question   
    this.answers = answers
    this.key = key

 
}

Question.prototype.addAnswers = function(...ans) {
    if(this.answers.length >= QUESTION_CONSTANTS) {
        console.log("Question already have a max of ", QUESTION_CONSTANTS)
        return null
    }
    

}


function createQuestions(questions) {
    const questionsArray = []
    const arr = questions.map( ({question, answers}, i) =>{
        const q = new Question(question, answers)
        questionsArray.push(q)
    })

    return {
        questions: questionsArray
    }
}

const questions = createQuestions(ALL_QUESTIONS)



export { questions }