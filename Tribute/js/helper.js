function Element(type, id, className) {
    const element = document.createElement(type)

    if( id != undefined) {
        element.id = id
    }

    if( className != undefined) {
        element.className = className
    }
    this.type = type;
    this.el = element;
}

Element.prototype.appendHeading = function(headingType, title, className) {
    const heading = document.createElement(headingType);
    heading.innerHTML = title;

    if(className != undefined) {
        heading.className = className
    }

    this.el.appendChild(heading)
}

Element.prototype.createList = function() {
    const ul = document.createElement('ul')
    ul.className = 'list'
    this.list = ul
}

Element.prototype.createSection = function() {
    const section = document.createElement('section')
    section.className= "section"
    this.section = section
}

Element.prototype.addToSection = function(type, info) {
    const el = document.createElement(type)
    el.innerHTML = info

    this.section.appendChild(el)

}

Element.prototype.appendSection = function() {
    this.el.appendChild(thi.section)
}

Element.prototype.addLink = function({href, value}) {
    const link = document.createElement('li')
    const hyperlink = document.createElement('a')
    hyperlink.href = href
    hyperlink.innerHTML = value
    link.appendChild(hyperlink)

    this.list.appendChild(link)
}

Element.prototype.appendList = function() {
    this.el.appendChild(this.list)
}

Element.prototype.appendParagraph = function(info) {
    const para = document.createElement('p')
    para.innerHTML = info
    this.el.appendChild(para)
}

Element.prototype.appendInfo = function(type, str, id) {
    const section = document.createElement(type)
    section.innerHTML = str

    if(id != null) {
        section.id = id
    }

    return this.el.appendChild(section)
}


