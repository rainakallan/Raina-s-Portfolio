import { CopyEmail } from "./CopyEmail";
import cardbg1 from "../assets/cardbg1.jpg";
import card2 from "../assets/card2.avif";
import card3 from "../assets/card3.PNG";
import card4 from "../assets/card4.PNG";
import card5 from "../assets/card5.avif";

export const About = () => {
  return (
    <section id="about" className="py-8 px-10 relative">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* BentoGrid */}
        <div className="grid grid-cols-1 md:grid-cols-10 auto-rows-auto gap-6 w-full mb-12">
          {/* Card 1 */}
          <div
            className="col-span-1 md:col-span-8 lg:col-span-6 row-span-2 p-4 sm:p-5 md:p-6 rounded-4xl flex flex-col justify-start items-center font-body text-white space-y-4 text-start bg-[var(--card)] border border-primary bg-cover bg-center relative overflow-hidden min-h-[200px]"
            style={{ backgroundImage: `url(${cardbg1})` }}
          >
            {/* Overlay class */}
            <div className="absolute inset-0 bg-black/80 z-0 h-full"></div>
            <h2 className="text-xl md:text-2xl font-body z-10">
              Focused on crafting clean, elegant, and user-first web interfaces
              using ReactJs and modern front-end tools.
            </h2>
          </div>

          {/* Card 2 */}
          <div
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 p-5 rounded-3xl flex flex-col justify-start items-center font-body text-white space-y-4 text-start border border-primary bg-[var(--card)] bg-cover bg-center relative overflow-hidden min-h-[100px]"
            style={{ backgroundImage: `url(${card2})` }}
          >
            {/* Overlay class */}
            <div className="absolute inset-0 bg-black/80 z-0 h-full"></div>
            <h2 className="text-xl md:text-2xl font-body text-center md:text-left z-10">
              Driven by curiosity and a passion for problem-solving
            </h2>
          </div>

          {/* Card 3 */}
          <div
            className="col-span-1 md:col-span-3 lg:col-span-5 row-span-2 p-5 rounded-4xl flex flex-col justify-start items-center font-body text-white space-y-4 text-start border border-primary bg-[var(--card)] bg-cover bg-center relative overflow-hidden min-h-[150px]"
            style={{ backgroundImage: `url(${card3})` }}
          >
            {/* Overlay class */}
            <div className="absolute inset-0 bg-black/70 z-0 h-full"></div>
            <h2 className="text-xl md:text-2xl font-body text-center md:text-left z-10">
              Continuously learning and evolving with the latest in frontend
              technologies
            </h2>
          </div>

          {/* Card 4 */}
          <div
            className="col-span-1 md:col-span-3 lg:col-span-5 row-span-2 p-5 rounded-4xl flex flex-col justify-start items-center font-body text-white space-y-4 text-start border border-primary bg-[var(--card)] bg-cover bg-center relative overflow-hidden min-h-[100px]"
            style={{ backgroundImage: `url(${card4})` }}
          >
            {/* Overlay class */}
            <div className="absolute inset-0 bg-black/70 z-0 h-full"></div>
            <h2 className="text-xl md:text-2xl font-body text-center md:text-left z-10">
              Delivering timely solutions through open, transparent
              communication
            </h2>
          </div>

          {/* Card 5 */}
          <div
            className="col-span-1 md:col-span-5 lg:col-span-6 row-span-2 p-5 rounded-4xl flex flex-col justify-start items-center font-body text-white space-y-4 text-start border border-primary bg-[var(--card)] bg-cover bg-center relative overflow-hidden min-h-[100px]"
            style={{ backgroundImage: `url(${card5})` }}
          >
            {/* Overlay class */}
            <div className="absolute inset-0 bg-black/70 z-0 h-full"></div>
            <p className="text-sm md:text-md font-extralight"></p>
            <h2 className="text-xl md:text-2xl font-body text-center md:text-left z-10">
              Blending technical development skills with user experience
              insights
            </h2>
          </div>

          {/* CTA Block */}
          {/* <div className="col-span-1 md:col-span-4 py-3 row-span-2 rounded-4xl flex flex-col justify-center items-center text-2xl font-semibold text-white space-y-4 text-center border border-primary  animated-gradient">
            Do you want to start a project together?
            <CopyEmail />
          </div> */}

          <div className="col-span-1 md:col-span-4 py-3 row-span-2 rounded-4xl flex flex-col justify-center items-center">
            <div className=" w-full max-w-sm bg-conic/[from_var(--border-angle)] animate-rotate-border from-[var(-primary)] via-[var(--accent)] to-yellow-500 from-80% via-90% to-100% p-[2px] rounded-4xl">
              <div className="p-10 rounded-4xl animated-gradient gradient-border text-2xl font-semibold text-white text-center">
                {" "}
                Do you want to start a project together?
                <CopyEmail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
