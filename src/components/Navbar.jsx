import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { href } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    ,
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full rounded z-40 transition-all duration-400 mt-6",
        isScrolled
          ? "py-3 bg-[var(--background)] backdrop-blur-md shadow-xs rounded"
          : "py-5"
      )}
    >
      {/* Menu */}
      <div className="container cursor-pointer flex items-center justify-center ">
        <div className="flex space-x-8 ">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className=" text-[var(--foreground)] hover:text-[var(--primary)] text-glow transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
