import { getAuthor } from "@/src/entities/api/author";
import styles from "./header.module.css";

export async function Header() {
  const author = await getAuthor();
  const NAME_INITIALS = author.name
    .split(" ")
    .map((p) => p.charAt(0))
    .join("");

  return (
    <header className="flex items-center justify-between h-30 border-b border-line">
      <div className="flex items-center gap-x-3">
        <div
          className="flex items-center justify-center lg:size-9 bg-accent-teal text-bg-deep lg:text-[0.9375rem] md:text-sm text-xs font-medium leading-tight lg:rounded-[0.625rem] md:rounded-[0.5625rem] md:size-8 rounded-lg size-7"
          role="figure"
        >
          {NAME_INITIALS}
        </div>

        <div className="flex flex-col gap-y-0.5">
          <h1 className="text-md leading-tight">{author.name}</h1>
          <p className="note-text">{author.title}</p>
        </div>
      </div>

      <nav className="flex items-center gap-x-8 max-sm:hidden">
        <a className={styles.link} href="#stack">
          Stack
        </a>
        <a className={styles.link} href="#codework">
          Codework
        </a>
        <a className={styles.link} href="#open">
          Open projects
        </a>
      </nav>

      <div className="max-sm:hidden">
        {author.seeking_for_work ? (
          <p className="status-pill">
            <span className="dot variant--size-md text-accent-green"></span>
            Open to work
          </p>
        ) : null}
      </div>
    </header>
  );
}
