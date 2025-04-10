import ProfilePic from "../assets/profile.png";
import LogoOutline from "../assets/logo-outline.svg";
import SquareDots from "../assets/square-dots.svg";
import QuoteIcon from "../assets/quote.svg";

export default function Hero() {
  return (
    <section id="home" className="mt-2">
      <div className="container max-w-[28.75rem]:pt-7 pb-7 pt-15">
        <div className=" flex-col min-[62.5rem]:flex-row flex gap-2 items-center">
          <div className="min-[62.5rem]:min-w-[33.6rem] space-y-3 min-[62.5rem]:space-y-6 -mt-13">
            <h1 className="font-semibold text-3xl sm:text-[2rem] leading-10 text-center min-[62.5rem]:text-left">
              Leonard is a{" "}
              <span className="text-primary">full-stack developer</span>
            </h1>
            <p className="text-gray text-center max-w-[40rem] min-[62.5rem]:text-left">
              He creates responsive applications and builds backend
              infrastructure
            </p>
            <div className="flex">
              <a
                href="#contact"
                className="btn btn-primary mx-auto min-[62.5rem]:mx-0"
              >
                Contact me!!
              </a>
            </div>
          </div>
          <div className="w-full flex items-end flex-col relative max-w-[28.75rem]">
            <img
              src={LogoOutline}
              alt=""
              className="absolute top-22 left-2 w-[6.5rem] sm:w-[9.7rem]"
            />
            <div className="relative">
              <img
                src={SquareDots}
                alt=""
                className="absolute bottom-25 right-3 w-[3.5rem] sm:w-[5.25rem]"
              />
              <img src={ProfilePic} alt="" />
              <p className="w-full border text-gray border-gray max-w-[26rem] mx-auto p-2 flex items-center gap-2">
                <span className="h-5 w-5 inline-block bg-primary"></span>
                Open to new{" "}
                <span className="text-foreground">Opportunities</span>
              </p>
            </div>
          </div>
        </div>
        <Quote />
      </div>
    </section>
  );
}

export const Quote = () => {
  return (
    <div className="mt-25 w-fit mx-auto flex flex-col text-xl sm:text-2xl">
      <div className="border border-gray px-5 py-7 relative">
        <span className="absolute -top-3 left-3 py-1 px-2 bg-background">
          <img src={QuoteIcon} alt="" />
        </span>
        <span className="absolute -bottom-4 right-3 py-1 px-2 bg-background">
          <img src={QuoteIcon} alt="" />
        </span>
        <p>Simplicity is the soul of efficiency</p>
      </div>
      <div className="border-x border-b border-gray py-5 px-3 inline-block self-end">
        <p>- Austin Freeman</p>
      </div>
    </div>
  );
};
