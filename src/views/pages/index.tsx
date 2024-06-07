import { NoteCard } from "../components/noteCard";
import { NoteForm } from "../components/noteForm";
import { TemplateBase } from "../templates/templateBase";
import { INote } from "../../types/entity";

export const Home = ({ notes }: { notes: INote[] }) => {
  return (
    <TemplateBase>
      <main class="space-y-6">
        <NoteForm />
        <div id="notes" class="space-y-4">
          {notes.map((note) => {
            return <NoteCard note={note} />;
          })}
        </div>
      </main>
    </TemplateBase>
  );
};
