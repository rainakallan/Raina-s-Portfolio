import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-12 px-4 bg-[var(--card)] relative border-t border-[var(--border)] flex flex-wrap justify-between items-center mt-12 pt-8">
      {" "}
      <p className="text-sm font-body text-[var(--foreground)]">
        {" "}
        &copy; {new Date().getFullYear()} Raina Kallan. all rights reserved.
      </p>{" "}
      <a
        href="#hero"
        className="p-2 rounded-full border border-border text-foreground hover:text-[var(--primary)] transition-colors duration-300"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
