//aqui se modifica el contenido del portafolio
import compas from "../assets/images/compas.png"; //usa esta sintaxis para traer las imagenes de la experiencia
import unesco from "../assets/images/unesco.png";
import factoria from "../assets/images/factoria.png";
import todo from "../assets/images/TO-DO.png";
import shoppingCart from "../assets/icons/shoppingCart.png";
import chatbot from "../assets/icons/chatbot.png";

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
    iconUrl: chatbot,
    theme: "btn-back-red",
    name: "Chatbot de Empleate con Talento",
    description:
      "Este chatbot fue creado como parte de una landing page del stakeholder de Empléate con Talento, completamente hecho con React.",
    link: "https://chat-empleate.vercel.app/",
  },
  {
    iconUrl: chatbot,
    theme: "btn-back-black",
    name: "ChatbotReact",
    description:
      "El chatbot de React es una aplicación que interactúa con usuarios interesados en motocicletas. Utiliza un árbol de conversación basado en la edad y las preferencias de uso de motocicletas para brindar recomendaciones personalizadas. Ayuda a los usuarios a encontrar información sobre varios tipos de motocicletas adaptadas a sus necesidades específicas.",
    link: "https://chatbot-react-murex.vercel.app/",
  },
  {
    iconUrl: shoppingCart,
    theme: "btn-back-blue",
    name: "Simple Shopping Cart Component",
    description: "Un carrito de compras simple hecho con React.",
    link: "https://carrito-basico-zeta.vercel.app/",
  },
  {
    iconUrl: todo,
    theme: "btn-back-green",
    name: "TO-DO-LIST",
    description:
      "Una lista de tareas capaz de almacenar datos localmente. Puede parecer simple, pero permite el almacenamiento de datos y la edición de tareas. Además, una vez que una tarea se completa, se mueve automáticamente hacia el final de la lista, eliminando la necesidad de reorganizar las tareas manualmente. Toda la aplicación fue creada utilizando JavaScript con un toque de CSS. Presenta un diseño minimalista y hermoso, ¡así que disfrútalo!",
    link: "https://agt1984.github.io/to-do-list/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-orange",
    name: "EN PROCESO",
    description: "TRABAJANDO PARA USTED..",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
