import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="icons">
            <i className="mx-2 fas fa-trash-alt"></i>
            <i className="mx-2 fas fa-edit"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
