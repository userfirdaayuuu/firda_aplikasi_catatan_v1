import React from 'react';

function NoteInput(props) {
  const [title, setTitle] = React.useState('');
  const [fill, setFill] = React.useState('');
  const [createdAt, setCreatedAt] = React.useState('');
  const { addNote } = props;

  function onSubmitEventHandler(e) {
    e.preventDefault();
    const newNote = {
      title: title,
      fill: fill,
      createdAt: createdAt,
    };
    addNote(newNote);
  }

  function onTitleChangeEventHandler (e) {
    setTitle(e.target.value);
  }

  function onFillChangeEventHandler (e) {
    setFill(e.target.value);
  }

  function onCreatedAtChangeEventHandler (e) {
    setCreatedAt(e.target.value);
  }

  return (
    <form className='note-input' onSubmit={onSubmitEventHandler}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={onTitleChangeEventHandler}
      />
      <input
        type="text"
        placeholder="fill"
        value={fill}
        onChange={onFillChangeEventHandler}
      />
      <input
        type="text"
        placeholder="createdAt"
        value={createdAt}
        onChange={onCreatedAtChangeEventHandler}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}


export default NoteInput;