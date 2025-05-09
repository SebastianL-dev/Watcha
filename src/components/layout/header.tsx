import { Watcha } from "../icons/watcha";
import * as motion from "motion/react-client";
import { Github } from "../icons/github";
import { Search } from "../icons/search";
import { Moon } from "../icons/moon";
import NavLink from "../ui/links/navLink";
import IconLink from "../ui/links/iconLink";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[10%] py-6 fixed w-full z-50 border-b-2 border-neutral-500/20">
      <motion.a
        className="flex gap-2 items-center drop-shadow-main/60 hover:drop-shadow-main/100"
        href={"/"}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Watcha />
      </motion.a>

      <nav className="flex font-normal text-base text-neutral-50/70">
        <ul className="flex gap-4">
          <NavLink text="Home" href="" />
          <NavLink text="Movies" href="" />
          <NavLink text="Series" href="" />
        </ul>
      </nav>

      <div>
        <ul className="flex gap-1 text-neutral-50/70">
          <IconLink icon={<Search />} href="" aria="" blank={false} />
          <IconLink icon={<Moon />} href="" aria="" blank={false} />
          <IconLink
            icon={<Github />}
            href="https://github.com/SebastianL-dev/watcha"
            aria="Watcha GitHub repository"
            blank
          />
        </ul>
      </div>
    </header>
  );
}
