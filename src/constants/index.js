//aqui se modifica el contenido del portafolio
import compas from "../assets/images/compas.png"; //usa esta sintaxis para traer las imagenes de la experiencia
import unesco from "../assets/images/unesco.png";
import factoria from "../assets/images/factoria.png";
import todo from "../assets/images/TO-DO.png";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nextjs,
  nodejs,
  react,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Fullstack web development student.",
    company_name: "Factoría F5",
    icon: factoria,
    iconBg: "#accbe1",
    date: "Oct 2023 - Now",
    points: [
      "Development and design of desktop and mobile websites, both frontend and backend.",
      "User experience design and prototyping.",
      "Good development practices.",
      "Team development and client-focused work.",
      "Development of real projects tailored to clients' requests.",
    ],
  },
  {
    title:
      "Clinical psychologist specialized in mental health and social reintegration.",
    company_name: "Compass Group",
    icon: compas,
    iconBg: "#accbe1",
    date: "Feb 2017 - May. 2022",
    points: [
      "I was tasked with psychologically assessing the inmates designated by the contract to determine their psychological status.",
      "I executed interventions within the psychological care subprogram, assessing psychologically the accused or convicted individuals and generating actions to address the mental health issues among the inmates, detecting and preventing situations that may affect their physical integrity, and adhering to the work plan and requirements established in the concession contract.",
    ],
  },
  {
    title: "Clinical psychologist",
    company_name: "UNESCO Chile",
    icon: unesco,
    iconBg: "#fbc3bc",
    date: "Sept 2017 - Dic 2017",
    points: [
      "Among my duties within the project were to psychologically assess the security personnel and deliver the psycholaboral reports to the Administrative and Financial Officer of UNESCO Chile.",
      "Having successfully conducted the personnel evaluation enabled me to perform individual as well as occupational diagnosis on addiction and drug use.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/agt1984",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/alvaro-luis-gonzalez-trejo-93a421125",
  },
];

export const projects = [
  {
    iconUrl: todo,
    theme: "btn-back-green",
    name: "TO-DO-LIST",
    description:
      "A to-do list capable of storing data locally. It may seem simple, but it allows for data storage and task editing. Additionally, once a task is completed, it automatically moves to the bottom of the list, eliminating the need to manually rearrange tasks. The entire application was created using JavaScript with a touch of CSS. It features a minimal and beautiful design, so enjoy!",
    link: "https://agt1984.github.io/to-do-list/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "EN PROCESO",
    description: "TRABAJANDO PARA USTED.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "EN PROCESO",
    description: "TRABAJANDO PARA USTED..",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "EN PROCESO",
    description: "TRABAJANDO PARA USTED..",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
