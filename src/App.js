import { useContext, useReducer } from "react";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import { NotesContext } from "./context";
import notesReducer from "./reducer";

export default function App() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  // console.log(state);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Nav />
      {!state.currentNote ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
}
