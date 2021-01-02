import { useContext, useEffect, useRef, useState } from "react";
import { NotesContext } from "../context";

export default function EditNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currentNote.text);
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Cannot add a blank note!");
    } else {
      dispatch({
        type: "UPDATE_NOTE",
        payload: value,
      });
      setValue("");
    }
  };

  return (
    <div className="note-form">
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          ref={ref}
          onChange={handleChange}
          value={value}
        />
        <div style={{ textAlign: "right" }}>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
}
