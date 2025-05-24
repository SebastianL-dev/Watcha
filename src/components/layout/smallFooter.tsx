import Link from "next/link";
import { Github } from "../icons/github";
import { Instagram } from "../icons/instagram";
import { Watcha } from "../icons/watcha";
import IconLink from "../ui/links/iconLink";

export default function SmallFooter() {
  return (
    <footer className="flex justify-between gap-8 mx-[10%] mt-20 pt-6 pb-4 px-6 items-center w-[calc(100%_-_margin)] z-100 border-2 border-neutral-500/15 shadow-footer/10 rounded-2xl rounded-b-none border-b-0">
      <span className="text-text/50 text-sm">
        Made with ❤️ by{" "}
        <Link
          className="hover:text-text/80 font-bold transition-all ease-in-out duration-200"
          href={"https://github.com/SebastianL-dev"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sebastián Lozano
        </Link>
      </span>

      <ul className="flex gap-4 text-neutral-50/40">
        <IconLink
          icon={<Instagram width={28} height={28} />}
          href="https://www.instagram.com/sebastianl_dev/"
          aria="Sebastián Lozano Instagram"
          blank
        />
        <IconLink
          icon={<Github width={28} height={28} />}
          href="https://github.com/SebastianL-dev/watcha"
          aria="Watcha GitHub repository"
          blank
        />
      </ul>
    </footer>
  );
}
