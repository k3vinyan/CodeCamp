const listings = [
    {
        value: "Home"
    },
    {
        value: "Community"
    },
    {
        value: "Signup"
    },
    {
        value: "Login"
    }
]

function CreateNavbar(listings, className="navbar") {
    const el = document.createElement('ul')
    el.className = className
    const listingEl = listings.map( ({value}) => {
        const li = document.createElement('li')
        li.innerHTML = value
        el.appendChild(li)
    })

    this.el = el

    this.getEl = function() {
        return el
    }

}

const Navbar = new CreateNavbar(listings)


export default Navbar




