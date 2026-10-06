import { PropsWithChildren } from "react";

type IAvatarProps = PropsWithChildren;

export function Avatar({ children }: IAvatarProps) {
  return (
    <div
      className="flex items-center justify-center lg:size-9 bg-accent-teal text-bg-deep lg:text-[0.9375rem] md:text-sm text-xs font-medium leading-tight lg:rounded-[0.625rem] md:rounded-[0.5625rem] md:size-8 rounded-lg size-7"
      role="figure"
    >
      {children}
    </div>
  );
}
