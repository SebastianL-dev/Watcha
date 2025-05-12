import React from "react";
import type { SVGProps } from "react";

export function Trend(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      >
        <path d="m3 17l6-6l4 4l8-8"></path>
        <path d="M17 7h4v4"></path>
      </g>
    </svg>
  );
}
