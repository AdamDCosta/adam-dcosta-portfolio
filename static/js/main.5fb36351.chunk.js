(this["webpackJsonpadam-dcosta-portfolio"]=this["webpackJsonpadam-dcosta-portfolio"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(14),o=a.n(i),n=(a(22),a(23),a(4)),l=a(2),r=a(17),d=(a(24),a(25),a(0)),j=function(e){var t=e.toggleNav;return Object(d.jsxs)("div",{className:"nav-mobile",children:[Object(d.jsxs)("ul",{className:"nav-mobile__links",children:[Object(d.jsx)(n.b,{to:"/",style:{textDecoration:"none"},onClick:t,children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/projects",style:{textDecoration:"none"},onClick:t,children:Object(d.jsx)("li",{children:"Work"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/skills",style:{textDecoration:"none"},onClick:t,children:Object(d.jsx)("li",{children:"Skills"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/about",style:{textDecoration:"none"},onClick:t,children:Object(d.jsx)("li",{children:"About"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/contact",style:{textDecoration:"none"},onClick:t,children:Object(d.jsx)("li",{children:"Contact"})})]}),Object(d.jsxs)("div",{className:"nav-mobile__cross",onClick:t,children:[Object(d.jsx)("div",{className:"nav-mobile__cross--line nav-mobile__cross--top"}),Object(d.jsx)("div",{className:"nav-mobile__cross--line nav-mobile__cross--bottom"})]})]})},b=(a(32),function(){return Object(d.jsx)("div",{className:"nav-desktop",children:Object(d.jsxs)("ul",{className:"nav-desktop__links",children:[Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/projects",style:{textDecoration:"none"},children:Object(d.jsx)("li",{className:"nav-desktop__links--item",children:"Work"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/skills",style:{textDecoration:"none"},children:Object(d.jsx)("li",{className:"nav-desktop__links--item",children:"Skills"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/about",style:{textDecoration:"none"},children:Object(d.jsx)("li",{className:"nav-desktop__links--item",children:"About"})}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/contact",style:{textDecoration:"none"},children:Object(d.jsx)("li",{className:"nav-desktop__links--item",children:"Contact"})})]})})}),h=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],i=function(){c(!a)};return Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(n.b,{to:"/",style:{textDecoration:"none"},children:Object(d.jsx)("h2",{className:"nav__heading",children:"Adam D'Costa"})}),a&&Object(d.jsx)(j,{toggleNav:i}),Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"nav__hamburger",onClick:i,children:[Object(d.jsx)("div",{className:"nav__hamburger--line nav__hamburger--top"}),Object(d.jsx)("div",{className:"nav__hamburger--line nav__hamburger--middle"}),Object(d.jsx)("div",{className:"nav__hamburger--line nav__hamburger--bottom"})]})]})},m=(a(33),a(34),function(e){var t=e.viewButtonText;return Object(d.jsx)("button",{className:"work-button",children:t})}),p=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("h1",{className:"header__title",children:["Hello! ",Object(d.jsx)("br",{}),"I'm",Object(d.jsx)("span",{className:"header__title--name",children:" Adam"})]}),Object(d.jsx)("p",{className:"header__desc",children:"Hi, I\u2019m Adam and I\u2019m currently undergoing a 12-week intensive course with _nology in order to become a web developer in the near future. Please see my recent projects below."}),Object(d.jsx)(n.b,{to:"/adam-dcosta-portfolio/projects",style:{textDecoration:"none"},children:Object(d.jsx)("div",{className:"header__button",children:Object(d.jsx)(m,{viewButtonText:"View My Work"})})})]})},u=(a(35),[{id:5,title:"LUJAM - Live Client Project",image:"https://adamdcosta.github.io/My-portfolio/assets/project-images/lujam-tablet.png",description:"Built in React during the _nology course, our team produced the new login portal for Lujam's clients. This involved using an AGILE workflow with daily stand-ups, week-long sprints and pair-programming. As project manager for the final week I planned the sprint, tickets and handover document and lead the client demo. Hosting and auth with Firebase.",techStack:["React","HTML","SCSS","Javascript","Firebase","Pair Programming","Version Control"],preview:"https://lujam-jersey.web.app/",code:"https://github.com/nology-tech/jersey-client-project",color:"#2abca1"},{id:1,title:"PUNK API",image:"https://adamdcosta.github.io/My-portfolio/assets/project-images/punk-api.png",description:"A web application built in React using the Brewdog Punk API. It has search and filter functionality. The fetch is inside a useEffect taking in the search term and filter states as the dependencies, meaning the page updates as soon as the user starts typing or applies a filter. I used routing and useParams so that each beer tile routes though to an individual page with more information.",techStack:["React","HTML","SCSS","Javascript"],preview:"https://adamdcosta.github.io/beers-api/",code:"https://github.com/AdamDCosta/beers-api",color:"#029bc8"},{id:2,title:"CONNECT FOUR",image:"https://adamdcosta.github.io/My-portfolio/assets/project-images/connect-four-gameboard.JPG",description:"This is a connect four game written in vanilla javascript and styled with SCSS, using BEM naming conventions. At this point in the course I hadn't explored JS classes so for this I wanted to use a class and have a game object which had all the functionality inside it. You can win vertically, horizontally and diagonally.",techStack:["HTML","SCSS","Javascript"],preview:"https://adamdcosta.github.io/js-connect-four/",code:"https://github.com/AdamDCosta/js-connect-four",color:"#00A19D"},{id:3,title:"JS CALCULATOR",image:"https://adamdcosta.github.io/My-portfolio/assets/project-images/JS%20calculator%20image.JPG",description:"This is a mobile-first calculator app written in vanilla Javascript and styled with SCSS. It was a project set during week 4 on the full-time _nology course. The aims were to take what we had learnt up to that point to produce a working calculator, implementing functional Javascript, a mobile-first approach and to practice writing psuedocode. Cypress was used for E2E testing.",techStack:["HTML","SCSS","Javascript","Cypress"],preview:"https://adamdcosta.github.io/JS-Calculator/",code:"https://github.com/AdamDCosta/JS-Calculator",color:"#4bcfee"},{id:4,title:"JS MORSE CODE TRANSLATOR",image:"https://adamdcosta.github.io/My-portfolio/assets/project-images/morse-translator.png",description:"This is a morse code translator written in vanilla javascript. I implemented a TDD approaching - writing unit tests for my functions first and using Jest to run them. I created an object with english as the key and morse as the value.",techStack:["HTML","SCSS","Javascript","Jest"],preview:"https://adamdcosta.github.io/Morse-Translator/",code:"https://github.com/AdamDCosta/Morse-Translator",color:"#D4ECDD"}]),x=(a(36),a(37),function(e){var t=e.buttonText,a=e.buttonLink;return Object(d.jsx)("a",{href:a,children:Object(d.jsx)("button",{className:"code-button",children:t})})}),g=function(e){var t=e.project,a=t.color,s=t.techStack.map((function(e){return Object(d.jsx)("p",{className:"project-card__tech-stack--code",children:e})}));return Object(d.jsxs)("article",{className:"project-card",children:[Object(d.jsx)("h3",{className:"project-card__title",children:t.title}),Object(d.jsxs)("div",{className:"project-card__buttons",children:[Object(d.jsx)(x,{buttonText:"Preview",buttonLink:t.preview}),Object(d.jsx)(x,{buttonText:"Code",buttonLink:t.code})]}),Object(d.jsxs)("div",{className:"project-card__banner",style:{backgroundColor:a},children:[Object(d.jsx)("img",{className:"project-card__banner--img",src:t.image,alt:t.name}),Object(d.jsx)("p",{className:"project-card__banner--desc",children:t.description})]}),Object(d.jsx)("div",{className:"project-card__tech-stack",children:s})]})},_=function(){console.log(u);var e=u.map((function(e,t){return Object(d.jsx)(g,{project:e},e.title+(t+1))}));return Object(d.jsxs)("section",{className:"featured-projects",children:[Object(d.jsxs)("div",{className:"featured-projects__intro",children:[Object(d.jsx)("h2",{className:"featured-projects__intro--title",children:"Work"}),Object(d.jsx)("p",{className:"featured-projects__intro--desc",children:"Please see my recent projects below. These were all built during my time on the _nology web development course."})]}),e]})},O=(a(38),a.p+"static/media/Headshot.f3cb54ea.jpg"),v=function(){return Object(d.jsxs)("section",{className:"about",children:[Object(d.jsxs)("div",{className:"about__intro",children:[Object(d.jsx)("h2",{className:"about__intro--title",children:"About"}),Object(d.jsx)("p",{className:"about__intro--hello",children:"Hello! I'm Adam, and I'm a web developer."})]}),Object(d.jsxs)("div",{className:"about__profile",children:[Object(d.jsx)("p",{className:"about__profile--text about__profile--cell",children:"After 8 years of working in bookselling, a desire to build on new skills learnt during lockdown lead me to the decision to retrain and start a new career by enrolling on the twelve-week software development course with _nology. The course gave me the confidence that I've made the right decision to change career; that I relish the prospect of building something that is used by other people and has an impact on their lives. I\u2019m a quick learner with a customer-focused, flexible skillset developed in previous roles, as well as experience working in teams. I'm looking forward to starting my first role in tech."}),Object(d.jsx)("img",{src:O,alt:"profile",className:"about__profile--photo about__profile--cell"}),Object(d.jsx)("div",{className:"about__profile--button about__profile--cell",children:Object(d.jsx)(m,{viewButtonText:"Contact Me"})})]})]})},f=(a(39),a.p+"static/media/LinkedIn.ac317a28.svg"),k=a.p+"static/media/Github.2107d376.svg",N=a.p+"static/media/Email.6ad94eeb.svg",w=function(){return Object(d.jsxs)("section",{className:"contact",children:[Object(d.jsx)("div",{className:"contact__header",children:Object(d.jsx)("h2",{className:"contact__header--title",children:"Contact"})}),Object(d.jsxs)("div",{className:"contact__links",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/adamdcosta/",children:Object(d.jsx)("img",{src:f,alt:"LinkedIn",className:"contact__links--icon"})}),Object(d.jsx)("a",{href:"https://github.com/AdamDCosta",children:Object(d.jsx)("img",{src:k,alt:"Github",className:"contact__links--icon"})}),Object(d.jsx)("a",{href:"mailto:adam.dcosta@googlemail.com",children:Object(d.jsx)("img",{src:N,alt:"Email",className:"contact__links--icon"})}),Object(d.jsx)("div",{className:"contact__links--button",children:Object(d.jsx)(m,{viewButtonText:"View My CV"})}),Object(d.jsx)("p",{children:"adam.dcosta@googlemail.com"})]})]})},y=(a(40),a.p+"static/media/HTML.09a1c723.svg"),S=a.p+"static/media/CSS.a2bb6d7d.svg",C=a.p+"static/media/Sass.61238881.svg",T=a.p+"static/media/JS.03857163.svg",A=a.p+"static/media/React.7c5989d9.svg",I=a.p+"static/media/Java.0efd8fd2.svg",J=a.p+"static/media/Figma.42b3fc9c.svg",D=a.p+"static/media/Postman.9fb5befb.svg",L=a.p+"static/media/Trello.27c717fb.svg",M=function(){return Object(d.jsxs)("section",{className:"skills",children:[Object(d.jsxs)("div",{className:"skills__intro",children:[Object(d.jsx)("h2",{className:"skills__intro--title",children:"Skills"}),Object(d.jsx)("p",{className:"skills__intro--info",children:"The _nology course I recently completed primarily focused on Javascript, React and Java. Below is the full tech stack and fundamental skills I've been learning and working in."})]}),Object(d.jsxs)("div",{className:"skills__stack",children:[Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:y,alt:"HTML"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:S,alt:"CSS"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:C,alt:"Sass"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:T,alt:"Javascript"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:A,alt:"React"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:I,alt:"Java"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:k,alt:"Github"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:J,alt:"Figma"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:D,alt:"Postman"})}),Object(d.jsx)("div",{className:"skills__stack--cell",children:Object(d.jsx)("img",{src:L,alt:"Trello"})})]})]})},P=function(){return Object(d.jsx)(n.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(l.a,{path:"/adam-dcosta-portfolio/projects",children:Object(d.jsx)(_,{})}),Object(d.jsx)(l.a,{path:"/adam-dcosta-portfolio/skills",children:Object(d.jsx)(M,{})}),Object(d.jsx)(l.a,{path:"/adam-dcosta-portfolio/about",children:Object(d.jsx)(v,{})}),Object(d.jsx)(l.a,{path:"/adam-dcosta-portfolio/contact",children:Object(d.jsx)(w,{})})]})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),s(e),c(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),H()}},[[41,1,2]]]);
//# sourceMappingURL=main.5fb36351.chunk.js.map