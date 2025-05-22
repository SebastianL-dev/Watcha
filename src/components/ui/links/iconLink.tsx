import Link from "next/link";
import { ReactElement } from "react";

export default function IconLink({
  icon,
  href,
  aria,
  blank,
}: {
  icon: ReactElement;
  href: string;
  aria: string;
  blank: boolean;
}) {
  return (
    <li>
      <Link
        className="hover:scale-120 flex hover:text-text drop-shadow-main/0 hover:drop-shadow-main/100 transition-all ease-in-out duration-200"
        href={href}
        target={blank ? "_blank" : ""}
        aria-label={aria}
      >
        {icon}
      </Link>
    </li>
  );
}
