import { INote } from "../../types/entity";

export const NoteCard = ({
  note,
  isDisable = false,
  withOob = false,
}: {
  note: INote;
  isDisable?: boolean;
  withOob?: boolean;
}) => {
  return (
    <main
      id={`note-${note.id}`}
      hx-swap-oob={withOob ? "true" : ""}
      class={
        isDisable
          ? "bg-white border p-4 rounded-xl hover:shadow-xl transition duration-150 space-y-4 opacity-50"
          : "bg-white border p-4 rounded-xl hover:shadow-xl transition duration-150 space-y-4"
      }
    >
      <div>{note.content}</div>
      <div class="space-x-2">
        <button
          hx-get={`/notes/${note.id}/edit`}
          hx-swap="none"
          disabled={isDisable}
          class="border px-3 py-1 rounded-full font-medium"
        >
          Edit
        </button>
        <button
          hx-delete={`/notes/${note.id}`}
          hx-target="closest main"
          disabled={isDisable}
          class="border px-3 py-1 rounded-full font-medium"
        >
          Delete
        </button>
      </div>
    </main>
  );
};
