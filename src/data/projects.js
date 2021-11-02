export const projects = [
  {
    id: 1,
    title: "Punk API",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/punk-api.png",
    description: "A web application built in React using the Brewdog Punk API. It has search and filter functionality. The fetch is inside a useEffect taking in the search term and filter states as the dependencies. I used routing and useParams so that each beer tile routes though to an individual page with more information.",
    techStack: ["React", "HTML", "SCSS", "Javascript"],
    preview: "https://adamdcosta.github.io/beers-api/",
    code: "https://github.com/AdamDCosta/beers-api",
    color: "#FF4C29"
  },
  {
    id: 2,
    title: "Connect Four",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/connect-four-gameboard.JPG",
    description: "This is a connect four game written in vanilla javascript and styled with SCSS, using BEM naming conventions. At this point in the course I hadn't explored JS classes so for this I wanted to use a class and have a game object which had all the functionality inside it. You can win vertically, horizontally and diagonally.",
    techStack: ["HTML", "SCSS", "Javascript"],
    preview: "https://adamdcosta.github.io/js-connect-four/",
    code: "https://github.com/AdamDCosta/js-connect-four",
    color: "#00A19D"
  },
  {
    id: 3,
    title: "Javascript Calculator",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/JS%20calculator%20image.JPG",
    description: "This is a mobile-first calculator app written in vanilla Javascript and styled with SCSS. It was a project set during week 4 on the full-time _nology course. The aims were to take what we had learnt up to that point to produce a working calculator, implementing a mobile-first approach and to practice writing psuedocode.",
    techStack: ["HTML", "SCSS", "Javascript"],
    preview: "https://adamdcosta.github.io/JS-Calculator/",
    code: "https://github.com/AdamDCosta/JS-Calculator", 
    color: "#4bcfee" 
  },
  {
    id: 4,
    title: "Javascript Morse Code Translator",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/morse-translator.png",
    description: "This is a morse code translator written in vanilla javascript. I implemented a TDD approaching - writing unit tests for my functions first and using Jest to run them. I created an object with english as the key and morse as the value.",
    techStack: ["HTML", "SCSS", "Javascript", "Jest"],
    preview: "https://adamdcosta.github.io/Morse-Translator/",
    code: "https://github.com/AdamDCosta/Morse-Translator",
    color: "#D4ECDD"
  }
]