import { useContext } from "react";
import { NotesContext } from "../context";
import Note from "./Note";

export default function NoteList() {
  const { state } = useContext(NotesContext);
  console.log(state);
  return (
    <div className="notes-container">
      {state.notes.map((note, i) => (
        <Note note={note} key={i} />
      ))}
    </div>
  );
}
