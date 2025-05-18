import Link from "next/link";
import { Watcha } from "../icons/watcha";
import IconLink from "../ui/links/iconLink";
import { Github } from "../icons/github";
import { Instagram } from "../icons/instagram";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-8 mx-[10%] my-20 p-12 w-[calc(100%_-_margin)] z-100 border-2 border-neutral-500/15 shadow-footer/10 rounded-2xl">
      <div className="mb-4 flex">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-text items-center">
              <Watcha width={40} height={40} />
              <span className="text-3xl font-black">Watcha</span>
            </div>

            <p className="text-text/70 max-w-80">
              Look up any movie or TV show, check out the details, and choose
              one to watch.
            </p>
          </div>

          <div>
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
          </div>
        </section>

        <section></section>
      </div>

      <div className="w-full bg-text/15 h-0.5 rounded-full" />

      <div>
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
      </div>
    </footer>
  );
}
