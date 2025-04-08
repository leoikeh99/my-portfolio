import Logo from "../assets/logo.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray mt-20">
      <div className="container py-7">
        <div className="flex flex-col items-center">
          <a href="" className="font-bold">
            <span className="flex items-center gap-2">
              <img src={Logo} alt="" className="w-4" />
              Leonard
            </span>
          </a>
          <div className="flex gap-2 mt-2 items-center">
            <a href="">
              <img src={Github} alt="" />
            </a>
            <a href="">
              <img src={Linkedin} alt="" />
            </a>
          </div>
          <p className="text-gray mt-4">©2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
