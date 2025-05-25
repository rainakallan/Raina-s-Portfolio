export const Skills = () => {
  const frontendSkills = [
    "React JS",
    "TailwindCSS",
    "JavaScript",
    "Redux",
    "HTML",
    "CSS",
    "Hooks",
    "FireBase Realtime Database",
    "React-Router",
    "Flexbox",
    "CSS Grid",
    "Media Queries",
    "Asynchronous Programming",
    "Fetch API",
  ];
  const uxuiSkills = ["User research", "wireframing", "prototypes", "mockups"];
  const toolstech = [
    "Vs Code",
    "GitHub",
    "Figma",
    "Sublime Text",
    " Miro",
    "Adobe XD ",
    "FigJam (Flowcharts, Sitemaps)",
  ];
  return (
    <section id="skills" className="py-8 px-10 relative mt-12">
      <div className="mx-auto max-w-5xl space-y-10">
        <h2 className="text-2xl md:text-3xl font-heading text-center lg:text-3xl font-body text-[var(--primary-foreground)]">
          A versatile{" "}
          <span className="text-[var(--accent)] text-glow">
            Skill set
          </span>{" "}
          built through hands-on experience and continuous learning{" "}
        </h2>
        {/* Grid */}

        <div className="grid w-full h-full bg-[hsl(var(--primary)/0.1)] rounded-4xl grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-body text-[var(--primary)] text-glow mb-4">
              Front-End Development
            </h3>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {frontendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-[var(--card)] text-white py-2 px-4 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover: translate-y-1 transition-all">
            <h3 className="text-xl md:text-2xl font-body text-[var(--primary)] mb-4 text-glow">
              UX/UI Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {uxuiSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-[var(--card)] text-white py-2 px-4 rounded-full"
                >
                  {tech}
                </span>
              ))}
              <div className="rounded-xl p-6 hover: translate-y-1 transition-all ">
                <h3 className=" text-xl md:text-2xl font-body text-[var(--primary)] mb-4 text-glow ">
                  Tools and Technlogies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolstech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[var(--card)] text-white py-2 px-4 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
