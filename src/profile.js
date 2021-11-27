// Webpage Animations
const animation = {
  // False will switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 500,
  // if true, animation plays only once when element comes on screen.
  once: false,
};
// Displays my name on the header
const header = {
  name: "Austin Spraggins",
};
const background = {
  // Options: Snow or Particle, I like Particles, but left Snow in there.
  type: "Particle",
};
// about me image located in the './styles/images.css'
const section2title = "About Who I Am";
const about = {
  paragraph:
    " I passionately approach Web Design and Development, Penetration Testing, and Content Creation for almost 10K subscribers on my YouTube channel Shadow Gaming. I am genuinely enthusiastic about programming for the web, cybersecurity, and providing over 10,000 people with content I work tirelessly to produce. While simultaneously being the most loving husband and father I can be to my incredible family. As a small business owner, student, graphic designer, YouTuber, and primarily self-taught, independent programmer, I possess many skills. I continue to learn and master these skills daily. I appreciate you visiting my website and taking your valuable time to do so.",
};
// My skills, I did not add any skill bars.
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg, but I commented it out to remember
    //svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 // 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
   {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "JavaScript",
    faClass: "fab fa-js",
  },
  // Or use fab fa-npm for npm icon //
  {
    name: "Node",

    faClass: "fab fa-node",
  },
  {
    name: "Python",

    faClass: "fab fa-python",
  },
  {
    name: "Vue",

    faClass: "fab fa-vuejs",
  },
  {
    name: "React",

    faClass: "fab fa-react",
  },
  {
    name: "Adobe Creative Cloud Software",

    faClass: "fas fa-photo-video",
  },
  {
    name: "AWS",

    faClass: "fab fa-aws",
  },
  {
    name: "Azure",

    faClass: "fab fa-microsoft",
  },
  {
    name: "Kali Linux",

    faClass: "fab fa-linux",
  },
];
// My main projects showcased first
const section3Title = "Main Projects";
const projects = [
  {
    //  './styles/images.css' in #project1
    id: "project1",
    name: "Shadow Gaming | Official Youtube Channel",
    skills: ["Adobe Creative Cloud, SEO, Branding/Marketing"],
    url: "https://www.youtube.com/c/shadowgaming99",
  },
  {
    // './styles/images.css' in #project2
    id: "project2",
    name: "SASS Portfolio",
    skills: ["HTML, CSS, SASS JS"],
    url: "https://www.austinspragginsportfolio.xyz",
  },
  {
    // './styles/images.css' in #project3
    id: "project3",
    name: "Spraggins Designs Logo",
    skills: ["Adobe Creative Cloud Apps"],
    url: "https://www.spragginsdesigns.com",
  },
  {
    //  './styles/images.css' in #project4
    id: "project4",
    name: "My Wife's Website",
    skills: ["HTML, CSS, JS, Parallax"],
    url: "https://spragginsdesigns.github.io/jessica-spraggins-portfolio/",
  },
  {
    //  './styles/images.css' in #project5
    id: "project5",
    name: "Shadow Gaming | Official Website",
    skills: ["HTML, CSS, JS"],
    url: "https://www.shadowgaming.network/",
  },
  {
    //  './styles/images.css' in #project6
    id: "project6",
    name: "Rock Paper Scissors Game | Created With My Daughter Lilly",
    skills: ["Python 3.9"],
    url: "https://github.com/spragginsdesigns/rock-paper-scissors",
  },
];

// Education & Achievements Section

const section4Title = "Education & Achievements";
const miscellaneous = [
  {
    //  './styles/images.css' in #misc1
    id: "misc1",
    name: "Certificate for Information Systems: Web Design",
    url: "https://bit.ly/CertWebDesignAustin",
  },
  {
    //  './styles/images.css' in #misc2
    id: "misc2",
    name: "Information Systems: Web Design Associate in Science Degree | Fall 2021",
    url: "https://bit.ly/AAwebdesignaustin",
  },
  {
    //  './styles/images.css' in #misc3
    id: "misc3",
    name: "Truck Driver To Programmer | My Struggle To Change Careers For Passion",
    url: "https://docs.google.com/document/d/1ZriXNTPb4mPwGRMlWG1hCJHxSKQbqaLV4VlLmVupNkA/edit?usp=sharing",
  },
];
// Contact form text, and Formspree link
const section5Title = "Contact Me";
const contact = {
  pitch:
    "Send me a message safely and I will respond to you as swiftly as possible",
  copyright: "Austin Spraggins",
  contactUrl: "https://formspree.io/f/xbjqqvaj",
};
// My social media links and link to resume from Google Drive //
const social = {
  github: "https://github.com/spragginsdesigns",
  facebook: "https://www.facebook.com/spragginsdesigns",
  twitter: "https://twitter.com/shadow_gaming99",
  instagram: "https://www.instagram.com/spragginsdesigns",
  linkedin: "https://www.linkedin.com/in/austin-spraggins-a0514612a",
  resume: "https://drive.google.com/file/d/17y90QJ6i0cIss-T6WimLMjjnIzIFxkaw/view?usp=sharing",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
