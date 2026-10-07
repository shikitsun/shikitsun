import { authorNameToInitials, getAuthor } from "@/src/entities/author";
import { Avatar } from "@/src/shared/lib/ui/avatar";
import styles from "./index.module.css";
import { PropsWithChildren, ReactNode } from "react";

interface INavProps extends PropsWithChildren {
  header: ReactNode;
  className?: string;
}

// Could placed outside of that file
// But better be there for now
function Nav({ header, children, className }: INavProps) {
  return (
    <nav className={`flex flex-col gap-y-2.5 ${className ?? ""}`}>
      <h5 className="text-prefix text-text-muted font-semibold tracking-wider uppercase">
        {header}
      </h5>

      <ul className="flex flex-col gap-y-2">{children}</ul>
    </nav>
  );
}

function NavItem({ children }: PropsWithChildren) {
  return <li className="text-xs text-text-secondary">{children}</li>;
}

export default async function Footer() {
  const author = await getAuthor();
  const initials = authorNameToInitials(author.name);

  return (
    <footer
      className={`items-start border-t border-line md:py-12 py-10 ${styles.footer}`}
    >
      <div className={`flex items-center gap-x-3 ${styles.head}`}>
        <Avatar>{initials}</Avatar>
        <p className="text-md leading-tight">{author.name}</p>
      </div>

      <p className={`text-prefix text-text-muted ${styles.used}`}>
        Built with Next.js 16, Tailwind CSS v4
      </p>
      <p className={`text-prefix text-text-muted ${styles.copy}`}>
        &copy; {author.name}. All rights reserved.
      </p>

      <Nav header={"Navigate"} className={styles.nav}>
        <NavItem>
          <a href="#stack">Stack</a>
        </NavItem>
        <NavItem>
          <a href="#codework">Codework</a>
        </NavItem>
      </Nav>

      <Nav header="Elsewhere" className={styles.elsewhere}>
        <NavItem>
          <a href="https://github.com/shikitsun" rel="noopener" target="_blank">
            GitHub
          </a>
        </NavItem>
      </Nav>
    </footer>
  );
}
