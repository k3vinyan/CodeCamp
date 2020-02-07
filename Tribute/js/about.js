const about = 
"Lee Jun-fan, known professionally as Bruce Lee, was a Hong Kong-American actor, director, martial artist, martial arts instructor, and philosopher. He was the founder of Jeet Kune Do, a hybrid martial arts philosophy drawing from different combat disciplines that is often credited with paving the way for modern mixed martial arts.  He was born inSan Francisco, California, U.S in November 27, 1940 with the Lee Jun-fan.  He eventually died of in July 20, 1973 in Kowloon Tong, British Hong Kong of Cerbral edema."

const aboutWrapper = document.createElement('div')
const heading = document.createElement('h1')
const section = document.createElement('section')

aboutWrapper.id = "wrapper"
aboutWrapper.className = "about-wrapper"

heading.innerHTML = "About"
section.className = "info"
section.innerHTML = about;

aboutWrapper.appendChild(heading)
aboutWrapper.appendChild(section)

const displayAbout = () => {
   const div =  document.getElementById('section-1')
   div.innerHTML = ""
   div.appendChild(aboutWrapper)
   fixPosition("about")
}





