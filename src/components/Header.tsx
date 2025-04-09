import * as Dialog from "@radix-ui/react-dialog";
import Logo from "../assets/logo.svg";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background z-40">
      <div className="container py-7">
        <div className="flex justify-between">
          <a href="" className="font-bold">
            <span className="flex items-center gap-2">
              <img src={Logo} alt="" className="w-4" />
              Leonard
            </span>
          </a>
          <div>
            <nav className="hidden sm:block">
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
          <div className="block sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const navLinks = ["home", "skills", "projects", "about-me", "contact"];

const MobileMenu = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="cursor-pointer">
      <button>
        <span className="sr-only">open menu</span>
        <img src={MenuIcon} alt="" />
      </button>
    </Dialog.Trigger>
    {/* <Dialog.Overlay /> */}
    <Dialog.Portal>
      <Dialog.Content className="fixed top-0 left-0 bg-background w-svw h-[calc(100dvh-5.435rem)] mt-[5.435rem] flex items-center data-[state=open]:animate-slide-in z-40">
        <Dialog.Title>
          <span className="sr-only">Menu</span>
        </Dialog.Title>
        <Dialog.Description>
          <span className="sr-only">Navigate</span>
        </Dialog.Description>
        <div className="container">
          <nav>
            <ul className="text-4xl space-y-12 text-center -mt-28">
              {navLinks.map((link) => (
                <li key={link}>
                  <Dialog.Close asChild>
                    <a href={`#${link}`} className="text-gray font-regular">
                      <span className="text-primary">#</span>
                      {link}
                    </a>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Dialog.Close
          asChild
          className="fixed -top-19 right-3 p-4 bg-background cursor-pointer"
        >
          <button>
            <span className="sr-only">close menu</span>{" "}
            <img src={CloseIcon} alt="" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
