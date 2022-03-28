import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <p className="text-danger fw-bold">{note.tag}</p>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="icons">
            <i
              className="mx-2 fas fa-trash-alt"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully !!", "success");
              }}
            ></i>
            <i
              className="mx-2 fas fa-edit"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
