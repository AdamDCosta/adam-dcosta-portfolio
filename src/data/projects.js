export const projects = [
  {
    id: 5,
    title: "LUJAM - Live Client Project",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/lujam-tablet.png",
    description: "Built in React during the _nology course, our team produced the new login portal for Lujam's clients. This involved using an AGILE workflow with daily stand-ups, week-long sprints and pair-programming. As project manager for the final week I planned the sprint, tickets and handover document and lead the client demo. Hosting and auth with Firebase.",
    techStack: ["React", "HTML", "SCSS", "Javascript",  "Firebase", "Pair Programming", "Version Control"],
    preview: "https://lujam-jersey.web.app/",
    code: "https://github.com/nology-tech/jersey-client-project",
    color: "#2abca1"

  },
  {
    id: 1,
    title: "PUNK API",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/punk-api.png",
    description: "A web application built in React using the Brewdog Punk API. It has search and filter functionality. The fetch is inside a useEffect taking in the search term and filter states as the dependencies, meaning the page updates as soon as the user starts typing or applies a filter. I used routing and useParams so that each beer tile routes though to an individual page with more information.",
    techStack: ["React", "HTML", "SCSS", "Javascript"],
    preview: "https://adamdcosta.github.io/beers-api/",
    code: "https://github.com/AdamDCosta/beers-api",
    color: "#029bc8"
  },
  {
    id: 2,
    title: "CONNECT FOUR",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/connect-four-gameboard.JPG",
    description: "This is a connect four game written in vanilla javascript and styled with SCSS, using BEM naming conventions. At this point in the course I hadn't explored JS classes so for this I wanted to use a class and have a game object which had all the functionality inside it. You can win vertically, horizontally and diagonally.",
    techStack: ["HTML", "SCSS", "Javascript"],
    preview: "https://adamdcosta.github.io/js-connect-four/",
    code: "https://github.com/AdamDCosta/js-connect-four",
    color: "#00A19D"
  },
  {
    id: 3,
    title: "JS CALCULATOR",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/JS%20calculator%20image.JPG",
    description: "This is a mobile-first calculator app written in vanilla Javascript and styled with SCSS. It was a project set during week 4 on the full-time _nology course. The aims were to take what we had learnt up to that point to produce a working calculator, implementing functional Javascript, a mobile-first approach and to practice writing psuedocode. Cypress was used for E2E testing.",
    techStack: ["HTML", "SCSS", "Javascript", "Cypress"],
    preview: "https://adamdcosta.github.io/JS-Calculator/",
    code: "https://github.com/AdamDCosta/JS-Calculator", 
    color: "#4bcfee" 
  },
  {
    id: 4,
    title: "JS MORSE CODE TRANSLATOR",
    image: "https://adamdcosta.github.io/My-portfolio/assets/project-images/morse-translator.png",
    description: "This is a morse code translator written in vanilla javascript. I implemented a TDD approach - writing unit tests for my functions first and using Jest to run them. I then wrote the functions to pass the tests. I created an object with english as the key and morse as the value which I could then use for the translate function.",
    techStack: ["HTML", "SCSS", "Javascript", "Jest"],
    preview: "https://adamdcosta.github.io/Morse-Translator/",
    code: "https://github.com/AdamDCosta/Morse-Translator",
    color: "#D4ECDD"
  }
]