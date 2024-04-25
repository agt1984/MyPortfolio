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
      Hola, Soy <span className="font-semibold">Alvaro</span>👋🏻
      <br />Desarrollador Full Stack de España 🇪🇸
    </h1>
  ),
  2: (
    <InfoBox
      text="I have dedicated 1370 hours to studying Frontend and Fullstack development. Additionally, I have worked on various projects where I have gained extensive experience and practice."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I have several projects where I have put my skills to the test. Furthermore, I enjoy experimenting with new stacks and technologies, which allows me to stay updated and in constant learning."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="¿Need a project done or interested in working with me? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
