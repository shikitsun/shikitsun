import { getStackSkills, getStackTypes } from "@/src/entities/api/stack";
import { Skills } from "@/src/entities/ui/skills";
import { SectionHeader } from "@/src/shared/ui/section/Header";
import { Fragment } from "react/jsx-runtime";

export default async function Stack() {
  const types = await getStackTypes();
  const skills = await getStackSkills();

  return (
    <div className="bg-bg-alt mx-0 max-w-full">
      <section
        id="stack"
        className="flex flex-col gap-y-6 py-container max-w-(--container-width) mx-auto"
      >
        <SectionHeader
          category={<>02 &mdash; tech stack</>}
          categoryClassName="text-accent-amber"
          subheader={"Group by type and use"}
        >
          The stack I ship with
        </SectionHeader>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-2.5 gap-y-2.5">
          {skills.map((category) => {
            const type = types.find((type) => type.name === category.type);
            if (!type) return <Fragment key={category.type} />;
            return (
              <Skills
                key={category.type}
                type={type}
                skills={category.skills}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
