import ProfilePic from "../assets/profile.png";
import LogoOutline from "../assets/logo-outline.svg";
import SquareDots from "../assets/square-dots.svg";
import QuoteIcon from "../assets/quote.svg";

export default function Hero() {
  return (
    <section className="mt-2">
      <div className="max-w-[64rem] mx-auto py-7">
        <div className="flex gap-2 items-center">
          <div className="min-w-[33.6rem] space-y-6 -mt-13">
            <h1 className="font-semibold text-[2rem] leading-10">
              Leonard is a{" "}
              <span className="text-primary">full-stack developer</span>
            </h1>
            <p className="text-gray">
              He creates responsive applications and builds backend
              infrastructure
            </p>
            <a href="#" className="btn btn-primary">
              Contact me!!
            </a>
          </div>
          <div className="w-full flex items-end flex-col relative">
            <img
              src={LogoOutline}
              alt=""
              className="absolute top-22 left-2 w-[9.7rem]"
            />
            <div className="relative">
              <img
                src={SquareDots}
                alt=""
                className="absolute bottom-25 right-3"
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
    <div className="mt-25 w-fit mx-auto flex flex-col text-2xl">
      <div className="border border-gray px-5 py-7 relative">
        <span className="absolute -top-3 left-3 py-1 px-2 bg-background">
          <img src={QuoteIcon} alt="" />
        </span>
        <span className="absolute -bottom-4 right-3 py-1 px-2 bg-background">
          <img src={QuoteIcon} alt="" />
        </span>
        <p>With great power comes great electricity bill</p>
      </div>
      <div className="border-x border-b border-gray py-5 px-3 inline-block self-end">
        <p>- Dr. Who</p>
      </div>
    </div>
  );
};
