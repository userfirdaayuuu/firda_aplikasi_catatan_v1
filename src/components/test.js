import React from 'react';

const Note = ({ title, createdAt, body }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-muted">{createdAt}</small>
        </p>
      </div>
    </div>
  );
};

export default Note;
