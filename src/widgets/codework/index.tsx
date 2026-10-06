import {
  getCodework,
  CodeworkTab,
  CodeworkNotes,
} from "@/src/entities/codework";
import { SectionHeader } from "@/src/shared/lib/ui/section/Header";
import styles from "./index.module.css";
import CodeBlock from "@/src/shared/lib/ui/CodeBlock";

export async function CodeWork() {
  const examples = await getCodework();

  return (
    <section
      id="codework"
      className="flex flex-col gap-y-6 py-container reveal"
    >
      <SectionHeader
        category={<>03 &mdash; codework</>}
        categoryClassName="text-accent-violet"
      >
        Examples of code
      </SectionHeader>

      <div className={styles.container}>
        {/* dynamically create styles for known paths */}
        <style>
          {examples
            .map(
              (
                example,
              ) => `.${styles.container}:has(input[value="${example.path}"]:not(:checked)) [data-path="${example.path}"] {
						display: none;
						opacity: 0;
						translate: 0 0.5rem;
					}`,
            )
            .join("\n")}
        </style>

        <div role="tablist" className={styles.tabs}>
          {examples.map((example, idx) => (
            <CodeworkTab
              key={example.path}
              path={example.path}
              description={example.description}
              language={example.language}
              lines={example.lines}
              defaultChecked={idx === 0}
            />
          ))}
        </div>

        {examples.map((example) => (
          <div
            key={example.path}
            role="tabpanel"
            className={styles.panel}
            data-path={example.path}
          >
            <CodeBlock header={example.path}>{example.code}</CodeBlock>
          </div>
        ))}

        {examples.map((example) => (
          <CodeworkNotes
            key={example.path}
            notes={example.notes}
            path={example.path}
            className={styles.highlights}
          />
        ))}
      </div>
    </section>
  );
}
