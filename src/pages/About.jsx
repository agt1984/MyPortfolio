import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola, Soy{" "}
        <span className="orange-gradient_text font-semibold drop-shadow">
          {" "}
          Alvaro Luis
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Apasionado por la tecnologia, las ciencias sociales, el arte, los
          videojuegos y las artes marciales. Tengo más de 15 años de experiencia
          previa como psicologo, y actualmente soy desarrollador Web Front-End y
          Desarrollador Web Full-Stack con Ciberseguridad, con más de mil horas
          de formacion. Busco un sitio donde pueda aportar mi experiencia
          trabajando en distintos entornos de trabajo, además de poder seguir
          profundizando mis conocimientos en el sector tecnologico.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Mi Stack</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experiencia Laboral.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            He trabajado en todo tipo de compañías donde he aprendido mucho
            sobre la vida corporativa, logrando adaptarme a diversos entornos
            laborales y adquiriendo nuevas habilidades en el proceso.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
