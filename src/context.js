import React from "react";

export const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, text: "Build 100 React Projects" },
    { id: 2, text: "Build 100 React Redux Projects" },
    { id: 3, text: "Build 100 Vanilla Javascript Projects" },
  ],
});
