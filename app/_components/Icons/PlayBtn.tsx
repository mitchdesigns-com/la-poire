import React from "react";

export default function PlayBtn() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 140 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_432_2314)">
        <circle cx="70" cy="70.1201" r="50" fill="white" />
        <path d="M62 50.1201L88 70.2149L62 90.3098V50.1201Z" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_d_432_2314"
          x="0"
          y="0.120117"
          width="140"
          height="140"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_432_2314"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_432_2314"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
