import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";
export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Communion App",
      description:
        "It is a simple and elegant web application built with React, Vite, and Tailwind CSS. It features a welcoming Home page and an Event Listing page offering a clean, modern user experience across all devices.",
      image: "/project/Project1.png",
      tags: ["React Js", "TailwindCss", "Vite"],
      demoURl: "https://communion-app-ten.vercel.app/",
      gitHubUrl: "https://github.com/rainakallan/React-Communion",
    },
    {
      id: 2,
      title: "Sentence Construction Tool",
      description:
        "It is a React, Vite, and Tailwind CSS web app where users complete sentences by selecting words. It features a timer, auto-navigation, and instant feedback, with questions fetched from a JSON server and deployed using Firebase Realtime Database.",
      image: "/project/Project2.png",
      tags: [
        "React Js",
        "TailwindCss",
        "Vite",
        "Firebase Realtime Database",
        "JSON server",
      ],
      demoURl: " https://sentence-construction-tool-zeta.vercel.app/",
      gitHubUrl: "https://github.com/rainakallan/SentenceConstructionTool",
    },
  ];
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-body text-center mb-12 text-[var(--primary-foreground)]">
          {" "}
          Here are some of my recent
          <span className="text-[var(--primary)] text-2xl md:text-3xl text-glow">
            {" "}
            projects.
          </span>{" "}
          Each was carefully crafted with user-experience in mind.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-24">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group border border-[var(--border)] bg-[var(--card)] overflow-hidden rounded-lg shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs md:text-sm font-body  rounded-full bg-[var(--card)] border text-[var(--foreground)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-6">
                    <a
                      href={project.demoURl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center gap-2 bg-[var(--primary)] rounded-4xl px-4 py-2 text-foreground hover:card-hover hover:border  transition-colors duration-300"
                    >
                      Check Live Project <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center justify-center w-12 h-12 rounded-full border border-border text-foreground hover:text-[var(--primary)] transition-colors duration-300"
                    >
                      {" "}
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="button w-fit flex items-center justify-center mx-auto cursor-pointer gap-2"
            href="https://github.com/rainakallan"
            target="__blank"
          >
            Check my Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
