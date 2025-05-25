import resume from "../assets/Raina Kallan Resume.pdf";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center min-h-screen justify-center px-4"
    >
      <div className="container max-w-4xl items-center z-10 mx-auto ">
        <div className="space-y-6">
          <h1 className="text-[40px] md:text-5xl lg:text-6xl font-heading-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1 text-[var(--primary)] text-glow">
              Crafting
            </span>{" "}
            <span className="opacity-0 animate-fade-in-delay-1 text-[var(--primary)] text-glow">
              Websites
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 text-[var(--primary-foreground)]">
              {" "}
              that Elevate your Brand.
            </span>
          </h1>
          <p className="text-base md:text-xl text-[var(--foreground)]  font-body mx-auto m-10 max-2-2xl  opacity-0 animate-fade-in-delay-3">
            {" "}
            Hello, I am <strong>Raina</strong> specialized in Front-End
            Development with modern technologies, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4 pt-4 mx-auto">
            <a href="#projects" className="button py-3 px-8 font-body border ">
              View my work
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className=" py-3 px-8 m-4 rounded-full text-white font-body transition duration-300 border border-red-800 hover:shadow-md shadow-primary/70 hover:bg-primary hover:border-white hover:text-glow"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
