import React, { useState } from 'react';
import Note from './Note';
import "./Styles.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote({ ...currentNote, [name]: value });
  };

  const handleAddNote = () => {
    if (currentNote.title && currentNote.content) {
      setNotes([...notes, { ...currentNote, id: Date.now() }]);
      setCurrentNote({ id: null, title: '', content: '' });
    }
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  const handleUpdateNote = () => {
    setNotes(notes.map(note => (note.id === currentNote.id ? currentNote : note)));
    setCurrentNote({ id: null, title: '', content: '' });
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="app">
      <h2>NOTE APLLICATION</h2>
      <h1>Notes App</h1>
      <input
        type="text" name="title" placeholder="Title " value={currentNote.title} onChange={handleInputChange}
      />
      <textarea
        name="content" placeholder=" Enter your Content" value={currentNote.content} onChange={handleInputChange}
      />
      <button className='btn1' onClick={currentNote.id ? handleUpdateNote : handleAddNote}>
        {currentNote.id ? 'Update Note' : 'Add Note'}
      </button>

      <div className="notes-list">
      <h1>Notes list</h1>
        {notes.map(note => (
          <Note 
             key={note.id}
            note={note}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;