import { client } from "../models/client";
import { TBody } from "../types/entity";
import { Home } from "../views/pages";
import { INote } from "../types/entity";
import { Context } from "elysia";
import { NoteForm, NoteFormUpdate } from "../views/components/noteForm";
import { NoteCard } from "../views/components/noteCard";

export function getNotes() {
  const allNotes = client.query("SELECT * FROM notes").all() as INote[];

  return <Home notes={allNotes} />;
}

export function createNotes({ body }: Context) {
  const { content } = body as TBody;
  client.query("INSERT INTO notes (content) VALUES (?)").run(content);

  const currentNote = client
    .query("SELECT * FROM notes ORDER BY id DESC LIMIT 1")
    .all() as INote[];

  return (
    <>
      <NoteForm />
      <NoteCard note={currentNote[0]} />
    </>
  );
}

export function deleteNote({ params }: Context) {
  const { id } = params;
  client.query("DELETE FROM notes WHERE id = ?").run(id);

  return null;
}

export function updateNoteUI({ params }: Context) {
  const { id } = params;

  const currentNote = client
    .query("SELECT * FROM notes where id = ?")
    .all(id) as INote[];

  return (
    <>
      <NoteFormUpdate id={id} note={currentNote[0]} />
      <NoteCard note={currentNote[0]} isDisable withOob />
    </>
  );
}

export function updateNote({ params, body }: Context) {
  const { id } = params;
  const { content } = body as INote;

  client.query("UPDATE notes SET content = ? WHERE id = ?").run(content, id);

  const updatedNote = client
    .query("SELECT * FROM notes WHERE id = ?")
    .all(id) as INote[];

  return (
    <>
      <NoteForm />
      <NoteCard note={updatedNote[0]} />
    </>
  );
}
