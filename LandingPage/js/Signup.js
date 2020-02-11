function Signup() {
    const form = document.createElement('form')
    const emailInput = document.createElement('input')
    const password = document.createElement('input')

    emailInput.name = "email"
    password.name = "password"

    emailInput.placeholder = "email@email.com"
    password.name = "123password"

    form.appendChild(emailInput)
    form.appendChild(password)

    this.el = form;
}




