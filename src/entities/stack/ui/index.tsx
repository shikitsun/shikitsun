import { ComponentProps } from "react";
import { IStackSkill, IStackType } from "./../api/index";

interface ISkillsProps {
  type: IStackType;
  skills: IStackSkill[];
}

export function Skills({
  type,
  skills,
  className,
  ...props
}: ISkillsProps & Omit<ComponentProps<"section">, "children">) {
  return (
    <section
      className={`card flex flex-col gap-y-2 lg:py-5.5 lg:px-5.5 md:px-4.5 md:py-4.5 py-4 px-4 rounded-2xl bg-surface ${className}`}
      {...props}
    >
      <h5 className="flex items-center gap-x-2 lg:text-[1.0625rem] md:text-md text-sm leading-tight font-semibold">
        <span
          className="dot variant--size-md"
          style={{ color: type.color }}
        ></span>
        {type.name}
      </h5>
      <p className="note-text">{skills.length} skills</p>

      <ul className="grid grid-cols-2 gap-x-2.5 gap-y-2.5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="py-2.5 px-3 text-text-secondary border border-line text-xs leading-tight rounded-lg bg-bg-secondary"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
