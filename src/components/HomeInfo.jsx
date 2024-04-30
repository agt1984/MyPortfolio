import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box neo-brutalism-orange">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-orange py-4 px-8 text-white mx-5">
      Hola, Soy <span className="font-semibold">Alvaro Luis</span>👋🏻
      <br />
      Desarrollador Full Stack de España 🇪🇸
      <p className="text-sm">Usa ⇄ para moverte por la isla</p>
    </h1>
  ),
  2: (
    <InfoBox
      text="He dedicado 1370 horas al estudio del desarrollo Frontend y Backend. Además, he trabajado en diversos proyectos donde he adquirido amplia experiencia y práctica."
      link="/about"
      btnText="Aprende más"
    />
  ),
  3: (
    <InfoBox
      text="Tengo varios proyectos donde he puesto a prueba mis habilidades. Además, disfruto experimentando con nuevas herramientas y tecnologías, lo que me permite estar actualizado y en constante aprendizaje."
      link="/projects"
      btnText="Visita mi portafolio"
    />
  ),
  4: (
    <InfoBox
      text="¿Necesitas un proyecto completado o estás interesado en trabajar conmigo? Estoy a solo unos cuantos clics de distancia."
      link="/contact"
      btnText="Hablemos"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
