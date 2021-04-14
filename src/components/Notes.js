import { useState } from "react";
import { useData } from "../contexts/data-context";
import { ADD_NEW_USERNOTE } from "../reducer/reducer";
import uuid from "react-uuid";

export function Notes({ video }) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const { dispatch } = useData();

  const changeNote = (e) => {
    const { name, value } = e.target;
    setNewNote((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const addNote = (event) => {
    dispatch({
      type: ADD_NEW_USERNOTE,
      payload: { id: video.id, newNote: { ...newNote, id: uuid() } },
    });
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  };

  return (
    <div>
      <form className="add-notes">
        <input
          className="inputbox"
          value={newNote.title}
          name="title"
          text="text"
          placeholder="Title"
          onChange={changeNote}
        />
        <p>
          <textarea
            className="textbox"
            value={newNote.content}
            name="content"
            placeholder="Take a note..."
            onChange={changeNote}
            rows={3}
          ></textarea>
        </p>
        <button className="btn" onClick={addNote}>
          <i className="fas fa-plus"></i>
        </button>
      </form>
      <ul>
        {video.userNotes.map((note) => (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
