import { PropsWithChildren, ReactNode } from "react";

interface ISectionHeaderProps extends PropsWithChildren {
  category: ReactNode;
  categoryClassName?: string;
  subheader?: ReactNode;
}

export function SectionHeader({
  category,
  categoryClassName,
  children,
  subheader,
}: ISectionHeaderProps) {
  return (
    <header className="flex items-end justify-between">
      <div className="flex flex-col gap-y-2.5">
        <h5 className={`text-category ${categoryClassName} uppercase`}>
          {category}
        </h5>
        <h1 className="text-header">{children}</h1>
        <h6 className="text-subheader text-text-secondary empty:hidden">
          {subheader}
        </h6>
      </div>
    </header>
  );
}
