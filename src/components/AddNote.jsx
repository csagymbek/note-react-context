import { useContext, useEffect, useRef, useState } from "react";
import { NotesContext } from "../context";

export default function AddNote() {
  const { dispatch } = useContext(NotesContext);
  const [value, setValue] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Cannot add a blank note!");
    } else {
      dispatch({ type: "ADD_NOTE", payload: value });
      setValue("");
    }
  };

  return (
    <div className="note-form">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={ref}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button>Add Note</button>
      </form>
    </div>
  );
}
