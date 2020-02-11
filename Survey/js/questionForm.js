import { questions } from './questions.js'

console.log(questions)

function Form(question, answers=[], key=null) {
    const form   = document.createElement('form')
    const submit = document.createElement('submit')
    form.appendChild(submit)
    
    this.el = form
    this.question = question
    this.answers = answers
    this.key = key

    // either don't return (aka don't create a private scope) or return the prototype within the private scope
}


Form.prototype.updateQuestion = function({question}) {
    this.question = question

    return {
        question
    }
}

Form.prototype.updateAnswer = function({answers}) {
    this.answers = answers

    return {
        answers
    }
}


Form.prototype.createRadioInput = function(name, value, selected=false) {
    const input = document.createElement('input')
    input.name = name
    input.value = value
    input.checked = selected
    
    return {
        input
    }
}

Form.prototype.createRadioInputs = function(inputs) {
    const el = this.el;
    for(let i = 0; i < inputs.length; i++) {
        const input = this.createRadioInput(inputs[i].name, input[i].value, input[i].selected)
        el.appendChild({input})
    }

    return {
        el
    }
}

Form.prototype.addQuestionAndAnswers = function() {
    //const el = this.el

    console.log("hi");
}



const createForms = function({questions}) {
    let forms = []
    questions.map( ({question, answers}, i) => {
        let form = new Form(question, answers)
        form.updateAnswer()

        forms.push(form)
    })

    return {
        forms
    }

}
debugger;
let test = new Form(questions.questions[0], []);
test.addQuestionAndAnswers()


export { createForms } 

