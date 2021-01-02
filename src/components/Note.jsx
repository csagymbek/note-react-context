import { useContext } from "react";
import { NotesContext } from "../context";

export default function Note({ note }) {
  const { dispatch } = useContext(NotesContext);
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="btn-container">
        <button
          className="edit"
          onClick={() => dispatch({ type: "EDIT_NOTE", payload: note })}
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
