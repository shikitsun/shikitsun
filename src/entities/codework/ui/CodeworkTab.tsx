import { ICodeworkItem } from "../model";

interface ICodeworkTabProps extends Pick<
  ICodeworkItem,
  "path" | "description" | "language" | "lines"
> {
  defaultChecked?: boolean;
}

export function CodeworkTab({
  path,
  description,
  language,
  lines,
  defaultChecked,
}: ICodeworkTabProps) {
  return (
    <label
      className={
        "flex flex-col gap-y-1.25 card py-3.5 px-4 group [.group:has(>:checked)]:border-accent-teal cursor-pointer h-fit transition-colors duration-300"
      }
    >
      <div className="flex items-center gap-x-2 font-semibold text-prefix text-text-inactive [&:has(~:checked)]:text-accent-teal">
        <span className="dot variant--size-sm " aria-hidden></span>
        <span className="text-text-primary">{path}</span>
      </div>
      <p className="text-prefix text-text-muted">{description}</p>
      <p className="text-prefix-md text-text-muted">
        <span className="uppercase">{language}</span> &middot; {lines} lines
      </p>
      <input
        type="radio"
        role="tab"
        name="codework-item"
        value={path}
        className="hidden"
        defaultChecked={defaultChecked}
      />
    </label>
  );
}
