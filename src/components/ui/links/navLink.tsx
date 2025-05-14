import Link from "next/link";

export default function NavLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <li>
      <Link
        className="nav-link relative flex px-5 py-2 text-shadow-main/0 hover:text-shadow-main/100 hover:text-text transition-all ease-in-out duration-200"
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}
