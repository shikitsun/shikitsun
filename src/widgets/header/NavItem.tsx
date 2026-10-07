"use client";

import { PropsWithChildren } from "react";

interface INavItemProps extends PropsWithChildren {
  href: string;
}

// Hard-coded app-nav for a while, but better change in future
// While it linked only to header. When may need be somewhere else - then refactor
// Follow KISS
export default function NavItem({ href, children }: INavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center justify-between py-5 px-4.5 text-header transition-colors text-text-secondary hover:text-text-primary active:text-text-primary"
        // need be placed in separated file because it need client-only interactivity
        onClick={() => document.getElementById("app-nav")?.hidePopover()}
      >
        <span>{children}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10"
            y1="50"
            x2="85"
            y2="50"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M70 30L90 50L70 70"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </li>
  );
}
