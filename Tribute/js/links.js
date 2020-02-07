const links = [
    {
        href: "https://shop.brucelee.com/store/?utm_source=google&utm_medium=cpc&utm_campaign=brucelee_keywords&SRC=GPPC_XL_MH001&gclid=EAIaIQobChMIs-2I8O275wIVAtVkCh3IEwi6EAAYASAAEgL67_D_BwE",
        value: "Bruce Lee Official Store"
    },
    {
        href: "https://brucelee.com",
        value: "Additional Information about Bruce Lee"
    },
    {
        href: "https://bruceleefoundation.org",
        value: "Bruce Lee Foundation"
    }
]

const linkDiv = new Element('div', 'wrapper');
linkDiv.appendHeading('h1', 'Additional Information')
linkDiv.createList()

links.map( (link) => {
    linkDiv.addLink(link)
})

linkDiv.appendList()

const displayInfo = () => {
    const div = document.getElementById('section-1');
    div.innerHTML = ""
    div.appendChild(linkDiv.el)
    fixPosition("links")
}

