//credit https://www.timetoast.com/timelines/the-life-of-bruce-lee

const timeline = [
    {
        date: new Date('November 27, 1940'),
        info: 'Bruce Lee was born',
        description: 
        "\Lee Jun-Fan\" was born in San Francisco, USA to parents Lee Hoi-Chuen (Father) and Grace Ho (Mother)He had 3 older siblings and would later have a younger brother. Shortly after his birth, Bruce and family move back to China."
    },
    {
        date: new Date("January 1, 1952"),
        info: 'Bruce starts school',
        description: "After attending Tak Sun school at an early age, Bruce enrolls at La Salle Primary School at the age of 12. *Exact date unknown"
    },
    {
        date: new Date("January 1, 1954"),
        info: 'Bruce begins his training',
        description: "Bruce is introduced to martial arts by his father at a young age. His father taught him the fundamentals of Wu Shu Tai Chi Chuan.  At the age of 13, Bruce begins his extensive martial arts training and studies the art of Wing Chun under private tuition from his instructor Yip Man. *Exact date unknown"
    },
    {
        date: new Date("January 1, 1959"),
        info: "Bruce moves to Seattle, Washington",
        description: "After living for several months in San Fransisco, Bruce moves to Seattle to continue his High School education. He works as a live-in waiter for Ruby Chow, her husband was a friend of Bruce's father. *Exact date unknown"
    },
    {
        date: new Date("January 1, 1959"),
        info: "Bruce begins teaching Martial Arts",
        description: "Bruce begins teaching Martial Arts in the US.  He teaches his own style he calls \"Jun Fan Gung Fu\" which literaly translated as \"Bruce Lee\'s Kung Fu\". It can be described as a modified variation of Wing Chun. He later opened his first martial arts school in Seattle, named the \"Jun Fan Gung Fu Institute\". *Exact date unknown"
    },
    {
        date: new Date("April 15, 1959"),
        info: "Bruce moves to America",
        description: "In April 1959, Bruce moves to San Fransisco to live with his older sister Agnes. *Exact date unknown"
    },
    {
        date: new Date("December 1, 1960"),
        info: "Bruce graduates from High School",
        description: "Bruce completes his high school education and receives his diploma from Edison Technical School in Seattle. *Exact date unknown"
    },
    {
        date: new Date("March 1, 1961"),
        info: "Bruce at University",
        description: "Bruce enrolls at the University of Washington.  He majored in Drama, but also studied Philosophy and Psychology and various other subjects.  It was at the university that he met his future wife, Linda Emery *exact date unknown"
    },
    {
        date: new Date("January 1, 1962"),
        info: "Bruce proves himself",
        description: "In 1962, it is recorded by close friends and associates of Bruce, that he was challenged to a fight contest by a rival with a serious grudge against him.  What is particularly interesting about this fight is how quickly it lasted, exactly 11 seconds!  Bruce was able to knock out his opponent with a flurry of fast fore-arm blocks and punches to quickly gain the upper hand. *Exact date unknown"
    },
    {
        date: new Date("January 1, 1964"),
        info: "Bruce moves to Oakland",
        description: "Bruce drops out of University and moves to Oakland.  He moves in with a well know martial arts instructor named James Yimm Lee (no relation)Together they open a new martial arts school in Oakland, California. *Exact date unknown"
    },
    {
        date: new Date("January 1, 1964"),
        info: "Bruce becomes \"Kato\"",
        description: "Bruce is invited by a hollywood contact to audition for one of his most famous TV roles.  He successfully auditions for the role of \"Kato\" for the popular action series \"The Green Hornet\"  Unfortunately, the series only lasted for one series, but Bruce's popularity increased considerably. *Exaxct date unknown"
    },
    {
        date: new Date("January 1, 1967"),
        info: "Bruce creates \"Jeet Kune Do\"",
        description: "It was in 1967 during his first season of \"The Green Hornet\" that inspired Bruce to create his own iconic martial art style he called \"Jeet Kune Do\" He felt that his traditional style of Wing Chun wasn't suited for the chaotic street fight scenes he was used to performing in film and TV.  His new style focused more on speed, flexibility, practicality and efficiency. \"Jeet June Do\" translates as \"The way of the Intercepting Fist\" *Exact date unknown"
    },
    {
        date: new Date("January 1, 1970"),
        info: "Bruce VS Hollywood",
        description: "Bruce spent a great deal being invloved in various film and TV productions either in supporting roles or as fight scene choreographer.  Frustrated that he was unable to obtain a strarring role and establish himself, Bruce decided to return to China. *Exact date unknown"
    },
    {
        date: new Date("January 1, 1971"),
        info: "Bruce becomes big in Hong Kong",
        description: "Bruce returned to China after struggling to make it big in Hollywood. He did however become a huge success when moving to Hong Kong.  Nearly straight away, he was signed up to star in two of his iconic films \"The Big Boss\" and \"Fist of Fury\" which were hugely successful in Asian cinema. *Exact dates unknown"
    },
    {
        date: new Date("January 1, 1972"),
        info: "Bruce Hightlight",
        description: "The highlight of Bruce's career came in 1972, when at the peak of his global popularity; He wrote, directed and starred in his biggest hit film \"The Way of The Dragon\".  Considered to be Bruce's best work, the film included an end fight scene with action star Chuck Norris and Bruce's characters fighting to the death in the Colosseum in Rome.  This scene is still considered one of the very best fight scenes ever filmed. *Exact date unknown"
    },
    {
        date: new Date("May 10, 1973"),
        info: "Bruce health concerns",
        description: "Bruce was rushed to hospital after collapsing during post-production work on \"Enter The Dragon\" He had suffered from headaches and seizures due to swelling of the brain."
    },
    {
        date: new Date("July 20, 1973"),
        info: "Bruce Lee dies",
        description: "Bruce was due to meet with former James Bond star George Lazenby and producer Raymond Chow to discuss working on a new film together.  Bruce had been suffering with headaches and was given various pain-killers.  Bruce went to rest, but did not turn up to the meeting as planned. Concerned, they found Bruce but were unable to wake him.  Bruce was unable to be revived and was later pronounced dead before arriving in hospital.  It is believed that Bruce may have suffered an allergic reaction."
    },
    {
        date: new Date("April 1, 1959"),
        info: "Japanese Occupation (WW2)",
        description: "Bruce and family live for over 3 years under Japanese Occupation during World War 2."
    },
    {
        date: new Date("Jan 1, 1964"),
        info: "Bruce in Hollywood",
        description: "Bruce was involved in a lot of Film and TV projects in supporting roles and choreography. *Exact dates unknown"
    }

]

const formatDate = ({date}) => {
    const year = date.getFullYear()
    const day = date.getDate();
    const month = date.getMonth() + 1

    return `${month}/${day}/${year}`
}


const timelineDiv = new Element('div', 'wrapper'); 

timelineDiv.appendHeading('h1', 'Timeline', 'timeline-header');




timeline.map( (item) => {
    const section = new Element('section', undefined, "timeline-section")
    section.appendHeading('h2', formatDate(item), 'timeline-date-header')
    section.appendHeading('h3', item.info)
    section.appendParagraph(item.description)
    timelineDiv.el.appendChild(section.el)
})

const displayTimeline = () => {
   const div = document.getElementById('section-1')
   div.innerHTML = ""
   div.appendChild(timelineDiv.el)
   fixPosition("timeline");
}
