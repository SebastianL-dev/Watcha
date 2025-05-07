"use client";

import { knewave } from "@/styles/fonts";
import { Watcha } from "../icons/watcha";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Github } from "../icons/github";
import { Search } from "../icons/search";
import { Moon } from "../icons/moon";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[10%] py-6">
      <motion.a
        className="flex gap-2 items-center drop-shadow-main/60"
        href={"/"}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Watcha />
        <span className={`${knewave.className} antialiased text-2xl`}>
          Watcha
        </span>
      </motion.a>

      <nav className="flex font-normal text-sm text-neutral-300">
        <ul className="flex gap-4">
          <li>
            <Link
              className="nav-link relative flex px-4 py-2 text-shadow-main/0 hover:text-shadow-main/100 hover:text-text transition-all ease-in-out duration-200"
              href={""}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              className="nav-link relative flex px-4 py-2 text-shadow-main/0 hover:text-shadow-main/100 hover:text-text transition-all ease-in-out duration-200"
              href={""}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              className="nav-link relative flex px-4 py-2 text-shadow-main/0 hover:text-shadow-main/100 hover:text-text transition-all ease-in-out duration-200"
              href={""}
            >
              Categories
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <ul className="flex gap-1 text-neutral-400">
          <li>
            <Link
              className="hover:scale-110 flex p-2 hover:text-text drop-shadow-main/0 hover:drop-shadow-main/100 transition-all ease-in-out duration-200"
              href={""}
            >
              <Search />
            </Link>
          </li>
          <li>
            <Link
              className="hover:scale-110 flex p-2 hover:text-text drop-shadow-main/0 hover:drop-shadow-main/100 transition-all ease-in-out duration-200"
              href={""}
            >
              <Moon />
            </Link>
          </li>
          <li>
            <Link
              className="hover:scale-110 flex p-2 hover:text-text drop-shadow-main/0 hover:drop-shadow-main/100 transition-all ease-in-out duration-200"
              href={""}
            >
              <Github />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
