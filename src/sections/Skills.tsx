import LogoOutline from "../assets/logo-outline.svg";
import SquareDots from "../assets/square-dots.svg";
import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div id="skills" className="container py-7">
      <h2 className="sub-heading mb-4">
        <span>#</span>skills<span></span>
      </h2>
      <div className="flex gap-8">
        <div className="min-w-[21.8rem] min-h-[17.6rem] relative hidden min-[62.5rem]:block">
          <img
            src={LogoOutline}
            alt=""
            className="absolute bottom-0 left-3 w-[7rem]"
          />
          <img
            src={SquareDots}
            alt=""
            className="absolute top-5 left-0 w-[4rem]"
          />
          <img
            src={SquareDots}
            alt=""
            className="absolute w-[4rem] bottom-20 right-29"
          />
          <span className="border border-gray w-[5.4rem] h-[5.4rem] inline-block absolute top-0 right-5"></span>
          <span className="border border-gray w-[3.25rem] h-[3.25rem] inline-block absolute bottom-8 right-0"></span>
        </div>
        <div className="hidden min-[62.5rem]:grid grid-cols-3 gap-3">
          <Skill data={SKILLS[0]} />
          <div className="space-y-3">
            {SKILLS.slice(1, 3).map((skill, index) => (
              <Skill key={index} data={skill} />
            ))}
          </div>
          <div className="space-y-3">
            {SKILLS.slice(3).map((skill) => (
              <Skill key={skill.title} data={skill} />
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 min-[62.5rem]:hidden gap-4">
          {SKILLS.map((skill, index) => (
            <Skill key={`${index}-b`} data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

const Skill = ({ data }: { data: { title: string; items: string[] } }) => {
  return (
    <div className="border border-gray min-[62.5rem]:max-h-fit">
      <div className="border-b border-gray p-2">
        <h3>{data.title}</h3>
      </div>
      <div className="p-2 text-gray flex gap-2 flex-wrap font-semibold">
        {data.items.map((item, index) => (
          <span key={`${index}-c`}>{item}</span>
        ))}
      </div>
    </div>
  );
};
