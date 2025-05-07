import React from "react";
import type { SVGProps } from "react";

export function Watcha(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={0} fill="#05df72">
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.2s"
          values="0;3"
        ></animate>
      </circle>
      <path
        fill="#05df72"
        fillOpacity={0}
        stroke="#05df72"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"
      >
        <animate
          fill="freeze"
          attributeName="d"
          dur="0.2s"
          values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z"
        ></animate>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.2s"
          values="0;0.1"
        ></animate>
      </path>
    </svg>
  );
}
