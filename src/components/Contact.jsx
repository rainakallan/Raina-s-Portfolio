import { ArrowRight, Github, Linkedin, LinkIcon, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-10 relative mt-12">
      <div className="mx-auto max-w-4xl space-y-10">
        <h2 className="text-2xl md:text-3xl font-heading text-center lg:text-3xl font-body text-[var(--primary-foreground)]">
          Your next project deserves care, creativity, and clarity{" "}
          <span className="text-[var(--accent)] text-glow">
            Let’s connect and make it happen.{" "}
          </span>
        </h2>
        <div className="flex flex-col gap-2 items-center justify-center">
          <a
            href="mailto:rainakallan@outlook.com"
            className=" button flex items-center gap-2 py-3 px-10 font-body border rounded-4xl"
          >
            Get in Touch <ArrowRight />
          </a>
        </div>
      </div>
      <div className="p-8">
        <h4 className="font-body mb-4">Connect with me</h4>
        <div className="flex space-x-4 justify-center">
          <a
            href="www.linkedin.com/in/raina-kallan

"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a href="https://github.com/rainakallan" target="_blank">
            <Github />
          </a>
          <a href="https://www.fiverr.com/sellers/raina_kallan/" target="blank">
            <LinkIcon />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
