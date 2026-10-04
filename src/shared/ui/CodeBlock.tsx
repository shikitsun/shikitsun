"use client";

import hljs from "highlight.js/lib/core";
import ts from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

import "highlight.js/styles/github-dark.css";
import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";

hljs.registerLanguage("typescript", ts);
hljs.registerLanguage("xml", xml);

interface ICodeBlockProps extends PropsWithChildren {
  header?: ReactNode;
  className?: string;
}

export default function CodeBlock({
  children,
  header,
  className,
}: ICodeBlockProps) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) hljs.highlightBlock(ref.current);
  }, []);

  return (
    <section
      // could use clsx or classNames
      // but keep it simple
      className={`flex flex-col border border-line rounded-2xl bg-surface ${className ?? ""}`}
    >
      <header className="flex items-center justify-between px-5 py-4 bg-[#141b27] rounded-t-2xl">
        <div className="flex items-center py-1.25 gap-x-2" aria-hidden>
          <div className="dot variant--size-lg text-accent-pink"></div>
          <div className="dot variant--size-lg text-accent-amber"></div>
          <div className="dot variant--size-lg text-accent-green"></div>
        </div>

        {header}
      </header>

      <div className="py-5 px-4">
        <pre ref={ref} className="bg-transparent! max-sm:text-xs!">
          <code>{children}</code>
        </pre>
      </div>
    </section>
  );
}
