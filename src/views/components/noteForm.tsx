import { INote } from "../../types/entity";

export const NoteForm = () => {
  return (
    <form
      id="note-form"
      hx-post="/notes"
      hx-target="#notes"
      hx-swap="beforeend"
      hx-swap-oob="true"
      class="bg-black p-4 rounded-xl shadow-xl"
    >
      <textarea
        name="content"
        class="bg-transparent w-full block resize-none text-white font-medium focus:outline-none"
        placeholder="Write note here!"
      ></textarea>
      <button class="flex gap-2 items-center bg-white border rounded-full px-3 py-1 font-medium tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224a8.285 8.285 0 0 0-.483-.504l-5.167-5.167a8.448 8.448 0 0 0-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z"></path>
            <path d="M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1"></path>
            <path stroke-linecap="round" d="M7 8h6"></path>
          </g>
        </svg>
        Save
      </button>
    </form>
  );
};

export const NoteFormUpdate = ({ id, note }: { id: number; note: INote }) => {
  return (
    <form
      id="note-form"
      hx-patch={`/notes/${id}`}
      hx-target={`#note-${note.id}`}
      hx-swap="outerHTML"
      hx-swap-oob="true"
      class="bg-black p-4 rounded-xl shadow-xl"
    >
      <textarea
        name="content"
        class="bg-transparent w-full block resize-none text-white font-medium focus:outline-none"
      >
        {note.content}
      </textarea>
      <button class="flex gap-2 items-center bg-white border rounded-full px-3 py-1 font-medium tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224a8.285 8.285 0 0 0-.483-.504l-5.167-5.167a8.448 8.448 0 0 0-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z"></path>
            <path d="M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1"></path>
            <path stroke-linecap="round" d="M7 8h6"></path>
          </g>
        </svg>
        Update
      </button>
    </form>
  );
};
