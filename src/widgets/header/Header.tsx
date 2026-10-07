import { getAuthor, authorNameToInitials } from "@/src/entities/author";
import styles from "./header.module.css";
import { Avatar } from "@/src/shared/lib/ui/avatar";

export async function Header() {
  const author = await getAuthor();
  const initials = authorNameToInitials(author.name);

  return (
    <header className="flex items-center justify-between h-30 border-b border-line">
      <div className="flex items-center gap-x-3">
        <Avatar>{initials}</Avatar>

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
