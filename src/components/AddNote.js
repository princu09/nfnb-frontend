import React, { useContext  , useState} from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title : "" , description : "" , tag : ""})

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title , note.description , note.tag);
    props.showAlert("Added Successfully !!" , "success")
    setNote({title : "" , description : "" , tag : ""})
  };
  const onChange = (e) => {
    setNote({...note , [e.target.name ] : e.target.value })
  };
  return (
    <>
      <h2 className="mt-5 mb-4">Add Your Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title" name="title"
            onChange={onChange}
            value={note.title}
          />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description" name="description"
            onChange={onChange}
            value={note.description}
          />
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag" name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button disabled={note.title.length<5 ||note.description.length<5 ||note.tag.length<3 } type="submit" className="btn btn-outline-success" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </>
  );
};

export default AddNote;