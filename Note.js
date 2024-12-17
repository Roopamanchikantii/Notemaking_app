import React from 'react';

const Note = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button className='btn2' onClick={() => onEdit(note)}>Edit</button>
      <button  className='btn3' onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
