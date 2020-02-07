const quotes = [
    "I'm not in this world to live up to your expectations and you're not in this world to live up to mine",
    "Do not pray for an easy life, pray for the strength to endure a difficult one",
    "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend",
    "Adapt what is useful, reject what is useless, and add what is specifically your own",
    "Be happy, but never satisfied",
    "A wise man can learn more from a foolish question than a fool can learn from a wise answer",
    "Don't fear failure - Not failure, but low aim, is the crime. In great attempts it is glorious even to fail",
    "Mistakes are always forgivable, if one has the courage to admit them",
    "If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life.  There are no limits.  There are only plateaus, and you must not stay there, you must go beyond them",
    "I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times",
    "If you spend too much time thinking about a thing, you'll never get it done",
    "Love is like a friendship caught on fire. In the beginning a flame, very pretty, often hot and fierce, but still only light and flickering. As love grows older, our hearts mature and our love becomes as coals, deep-burning and unquenchable",
    "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend",
    "A goal is not always meant to be reached, it often serves simply as something to aim at",
    "Knowing is not enough, we must apply. Willing is not enough, we must do",
    "To hell with circumstances; I create opportunities",
    "It is not a daily increase, but a daily decrease. Hack away at the inessentials",
    "The key to immortality is first living a life worth remembering",
    "The doubters said, Man can not fly,The doers said, Maybe, but we'll try, And finally soared In the morning glow While non-believers Watched from below",
    "If you don't want to slip up tomorrow, speak the truth today",
    "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successfull personality and duplicate it",
    "Use only that which works, and take it from any place you can find it",
    "Not being tense but ready. Not thinking but not dreaming. Not being set but flexible. Liberation from the uneasy sense of confinement.  It is being wholly and quietly alive, aware and alert, ready for whatever may come",
    "A quick temper will make a fool of you soon enough",
    "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind",
    "Empty your cup so that it may be filled; become devoid to gain totality",
    "A good teacher protects his pupils from his own influence",
    "For it is easy to criticize and break down the spirit of others, but to know yourself takes a lifetime",
    "The great mistake is to anticipate the outcome of the engagement; you ought not to be thinking of whether it ends in victory or defeat. Let nature take its course, and your tools will strike at the right moment",
    "Forget about winning and losing; forget about pride and pain. Let your opponent graze your skin and you smash into his flesh; let him smash into your flesh and you fracture his bones; let him fracture your bones and you take his life! Do not be concerned with escaping safely- lay your life before him!!"
]

const eightSecond = () => 8000
const el = document.createElement('q')
el.id = "quote"
const obj = {
    quotes,
    el,
    count: 0
    
}

const increaseCount = (obj) => 
    ({
        ...obj,
        count: (obj.count != obj.quotes.length) ? obj.count++ : obj.count = 0
    })

const updateElement = ({el, quotes, count}) => 
    el.innerHTML = quotes[count]

const addElementToDOM = ({el}) => {
    const container = document.getElementById('quote-wrapper')
    container.appendChild(el)
}
    


const compileFunction = (...fns) =>
    obj =>
        fns.map( (f)=> 
            f(obj)
        )
    
const playQuotes = compileFunction(updateElement, increaseCount, addElementToDOM)


const startTicking = () =>
    setInterval(()=>
        playQuotes(obj)
    , eightSecond())

startTicking()

