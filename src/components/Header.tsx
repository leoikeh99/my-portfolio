import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="container py-7">
        <div className="flex justify-between">
          <a href="" className="font-bold">
            <span className="flex items-center gap-2">
              <img src={Logo} alt="" className="w-4" />
              Leonard
            </span>
          </a>
          <nav>
            <ul className="flex gap-8 items-center">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-gray font-regular">
                    <span className="text-primary">#</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

const navLinks = ["home", "works", "about-me", "contact"];
