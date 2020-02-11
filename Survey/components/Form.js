import { createForms } from '../js/questionForm.js'
import { questions } from '../js/questions.js'




const {forms} = createForms(questions)

console.log(forms)

forms.map( (form) =>
    console.log(form.form)
)