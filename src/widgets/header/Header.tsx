import { getAuthor, authorNameToInitials } from "@/src/entities/author";
import styles from "./header.module.css";
import { Avatar } from "@/src/shared/lib/ui/avatar";
import dynamic from "next/dynamic";

function OpenToWorkStatus({ className }: { className?: string }) {
  return (
    <p className={`status-pill ${className ?? ""}`}>
      <span className="dot variant--size-md text-accent-green"></span>
      Open to work
    </p>
  );
}

const NavItem = dynamic(() => import("./NavItem"));

function HeaderSmallScreenNav() {
  return (
    <>
      <button
        className={`md:hidden flex flex-col gap-y-1.25 items-center justify-between rounded-lg py-2.5 px-2.5 border border-line bg-surface transition-opacity hover:opacity-80 active:opacity-60 text-text-secondary cursor-pointer ${styles["nav-button"]}`}
        popoverTarget="app-nav"
        popoverTargetAction="toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="app-nav"
        popover="auto"
        className={`fixed w-screen bg-bg-alt py-12 ${styles["sm-container"]}`}
      >
        <div className="flex flex-col h-full justify-between mx-auto max-w-(--container-width)">
          <nav className={styles["sm-nav"]}>
            <ul className="flex flex-col divide-y divide-line">
              <NavItem href={"#stack"}>Stack</NavItem>
              <NavItem href={"#codework"}>Codework</NavItem>
            </ul>
          </nav>

          <OpenToWorkStatus className="w-fit" />
        </div>
      </div>
    </>
  );
}

export async function Header() {
  const author = await getAuthor();
  const initials = authorNameToInitials(author.name);

  return (
    <div className="sticky bg-bg-deep top-0 z-50 w-screen max-w-none mx-0">
      <header
        className={`flex items-center justify-between lg:py-5 md:py-4 py-3 border-b border-line mx-auto max-w-(--container-width) ${styles.header}`}
      >
        <div className="flex items-center gap-x-3">
          <Avatar>{initials}</Avatar>

          <div className="flex flex-col gap-y-0.5">
            <h1 className="text-md leading-tight">{author.name}</h1>
            <p className="note-text">{author.title}</p>
          </div>
        </div>

        <nav className="flex items-center gap-x-8 max-md:hidden">
          <a className={styles.link} href="#stack">
            Stack
          </a>
          <a className={styles.link} href="#codework">
            Codework
          </a>
        </nav>

        <div className="flex items-center gap-x-3">
          {author.seeking_for_work ? (
            <OpenToWorkStatus className="max-sm:hidden" />
          ) : null}

          <HeaderSmallScreenNav />
        </div>
      </header>
    </div>
  );
}
