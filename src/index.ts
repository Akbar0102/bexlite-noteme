import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import {
  createNotes,
  deleteNote,
  getNotes,
  updateNote,
  updateNoteUI,
} from "./controllers/noteController";
import { bodySchema } from "./types/entity";

const app = new Elysia()
  .use(html())
  .get("/notes", getNotes)
  .post("/notes", createNotes, {
    body: bodySchema,
  })
  .delete("/notes/:id", deleteNote)
  .get("/notes/:id/edit", updateNoteUI)
  .patch("/notes/:id", updateNote, {
    body: bodySchema,
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
