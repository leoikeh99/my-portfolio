import ProfileImage from "../assets/profile2.png";
import SquareDots from "../assets/square-dots.svg";

const About = () => {
  return (
    <section id="about-me">
      <div className="container py-7">
        <h2 className="sub-heading mb-4">
          <span>#</span>about-me<span></span>
        </h2>
        <div className="min-[62.5rem]:grid grid-cols-2">
          <div className="text-gray space-y-6 mt-5">
            <p>Hello, i'm Leonard!</p>
            <p>
              I am a software engineer with extensive experience in building
              full-stack web applications, primarily using JavaScript and
              TypeScript. I am a graduate and am currently pursuing a master's
              degree in Software Engineering at the University of Hertfordshire.
            </p>
            <p>
              I have built numerous projects and i'm always eager to learn and
              improve. I am passionate about all things tech, and I am always
              looking for new ways to improve my craft. I am also a quick
              learner and love to take on new challenges. I am always up for a
              good discussion about the latest trends in software engineering.
            </p>
            <a href="#" className="btn btn-primary">
              Contact Me {"->"}
            </a>
          </div>
          <div className="hidden min-[62.5rem]:flex items-end relative flex-col">
            <img src={SquareDots} alt="" className="absolute top-5 right-65" />
            <img src={ProfileImage} alt="" className="-mt-10" />
            <div className="border border-b border-primary w-full max-w-[15rem] mr-9"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
