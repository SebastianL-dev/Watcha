import * as motion from "motion/react-client";
import React from "react";

export default function MainLinkButton({
  text,
  primary,
  icon,
  href,
}: {
  text: string;
  primary: boolean;
  icon?: React.ReactNode;
  href: string;
}) {
  const colors = primary
    ? "bg-green-600 hover:bg-primary shadow-button-primary"
    : "";

  return (
    <motion.a
      className={`flex gap-2 px-4 py-2 w-fit rounded-full items-center font-semibold transition-colors ease-in-out duration-200 ${colors}`}
      aria-label={`${text} link`}
      href={href}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {primary ? (
        <>
          {icon}
          {text}
        </>
      ) : (
        <>
          {text}
          {icon}
        </>
      )}
    </motion.a>
  );
}
