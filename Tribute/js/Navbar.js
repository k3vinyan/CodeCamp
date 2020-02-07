import { createElement } from './helper.js'

const navbarInfo = {
    container: 'ul',
    li: {
        a: [
            {
                href: '#',
                value: "Home"
            },
            {
                href: '#',
                value: "About"
            },
            {
                href: '#',
                value: 'Timeline'
            },
            {
                href: '#',
                value: 'Additional Info'
            }
        ]
    }
}

const Navbar = createElement(navbarInfo)


export { Navbar }