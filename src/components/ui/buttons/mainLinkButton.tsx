import * as motion from "motion/react-client";
import React from "react";

export default function MainLinkButton({
  text,
  primary,
  blank,
  icon,
  href,
}: {
  text: string;
  primary: boolean;
  blank: boolean;
  icon?: React.ReactNode;
  href?: string | null;
}) {
  const colors = primary
    ? "bg-green-700 hover:bg-primary shadow-button-primary"
    : "";

  return (
    <motion.a
      className={`flex gap-2 px-4 py-2 w-fit rounded-full items-center font-semibold transition-colors ease-in-out duration-200 text-white ${colors}`}
      aria-label={`${text} link`}
      target={blank ? "_blank" : ""}
      rel="noopener noreferrer"
      href={href ? href : ""}
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
