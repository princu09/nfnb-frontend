import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNzE4MmUyYTc0ZWFkN2M3NDY4ODc2In0sImlhdCI6MTY0Nzc5Nzk2Nn0.BbpCvVZGbomJVJwi7v1osuoEva2fxoKMRpDwmZa7n6c",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNzE4MmUyYTc0ZWFkN2M3NDY4ODc2In0sImlhdCI6MTY0Nzc5Nzk2Nn0.BbpCvVZGbomJVJwi7v1osuoEva2fxoKMRpDwmZa7n6c",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = await response.json();
    // console.log(json);
    getNotes();
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNzE4MmUyYTc0ZWFkN2M3NDY4ODc2In0sImlhdCI6MTY0Nzc5Nzk2Nn0.BbpCvVZGbomJVJwi7v1osuoEva2fxoKMRpDwmZa7n6c",
      },
    });

    // const json = response.json();
    // console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNzE4MmUyYTc0ZWFkN2M3NDY4ODc2In0sImlhdCI6MTY0Nzc5Nzk2Nn0.BbpCvVZGbomJVJwi7v1osuoEva2fxoKMRpDwmZa7n6c",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // const json = await response.json();
    // console.log(json);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    getNotes();
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
