const str = "Enter the Dragon"


const wrapper = new Element('div', 'wrapper')
const quoteWrapper = new Element('div', 'quote-wrapper')
wrapper.appendHeading('h1', str, 'title')
wrapper.el.appendChild(quoteWrapper.el)



const displayHome = () => {
    const div =  document.getElementById('section-1')
    div.innerHTML = ""
    div.appendChild(wrapper.el)
    fixPosition("home")
}

displayHome()
   
    