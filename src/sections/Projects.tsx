import { PROJECTS } from "../constants";
import GithubIcon from "../assets/github.svg";

const Projects = () => {
  return (
    <section>
      <div className="max-w-[64rem] mx-auto py-7">
        <h2 className="sub-heading mb-10">
          <span>#</span>projects<span></span>
        </h2>
        <div className="grid grid-cols-3 gap-2.5">
          {PROJECTS.map((project, index) => (
            <div key={index} className="border border-gray">
              <div className="border-b border-gray">
                <img src={project.image} alt="" />
              </div>
              <div className="p-2 border-b border-gray text-gray flex gap-2 flex-wrap">
                {project.techStack.map((stack) => (
                  <span>{stack}</span>
                ))}
              </div>
              <div className="p-4 space-y-4">
                <h3 className="text-2xl font-medium">{project.title}</h3>
                <p className="text-gray">{project.description}</p>
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Live <span>{"<~>"}</span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    Code
                    <img src={GithubIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
