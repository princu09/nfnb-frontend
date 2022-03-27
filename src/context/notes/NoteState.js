import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62376c6085d8ebb575d19656",
      user: "6237182e2a74ead7c7468876",
      title: "My Title",
      description: "This is Description for Demo",
      tag: "General",
      date: "2022-03-20T18:03:12.675Z",
      __v: 0,
    },
    {
      _id: "62376ce850dfff2780592391",
      user: "6237182e2a74ead7c7468876",
      title: "Hello I am Prince",
      description: "This is My Description for Demo",
      tag: "Sports",
      date: "2022-03-20T18:05:28.711Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
