"use client";

import { Watcha } from "../icons/watcha";
import * as motion from "motion/react-client";
import { Github } from "../icons/github";
import { Search } from "../icons/search";
import NavLink from "../ui/links/navLink";
import IconLink from "../ui/links/iconLink";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`flex justify-between items-center px-[10%] py-6 fixed w-full z-100 border-b-2 border-neutral-500/20 transition-all ease-in-out duration-200 ${
        scrolled ? "bg-neutral-950/60 backdrop-blur-md" : ""
      }`}
    >
      <motion.a
        className="flex gap-2 items-center drop-shadow-main/60 hover:drop-shadow-main/100"
        href={"/"}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Watcha logo link to home page"
      >
        <Watcha className="text-primary" />
      </motion.a>

      <nav className="flex font-normal text-base text-neutral-50/70">
        <ul className="flex gap-4 max-sm:hidden">
          <NavLink text="Home" href="/" />
          <NavLink text="Movies" href="/movies" />
          <NavLink text="Tv series" href="/tv" />
        </ul>
      </nav>

      <div>
        <ul className="flex gap-4 text-neutral-50/70">
          <IconLink
            icon={<Search />}
            href="/search"
            aria="Search movies or tv series"
            blank={false}
          />
          <IconLink
            icon={<Github />}
            href="https://github.com/SebastianL-dev/"
            aria="Watcha GitHub repository"
            blank
          />
        </ul>
      </div>
    </header>
  );
}
