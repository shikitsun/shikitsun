import { ICodeworkItem, ICodeworkNote } from "../model";

type ICodeworkNoteProps = ICodeworkNote;

export function CodeworkNote({ color, description }: ICodeworkNoteProps) {
  return (
    <li className="flex flex-1 items-center gap-x-3 card text-prefix text-text-muted md:px-4.5 px-4 lg:py-6.75 py-5">
      <span className="dot variant--size-lg" style={{ color }}></span>
      {description}
    </li>
  );
}

interface ICodeworkNotesProps extends Pick<ICodeworkItem, "notes" | "path"> {
  className?: string;
}

export function CodeworkNotes({ notes, path, className }: ICodeworkNotesProps) {
  return (
    <ul
      className={`flex lg:flex-row flex-col gap-y-2.5 gap-x-6 empty:hidden ${className ?? ""}`}
      data-path={path}
    >
      {notes.map((note) => (
        <CodeworkNote
          key={note.description}
          color={note.color}
          description={note.description}
        />
      ))}
    </ul>
  );
}
