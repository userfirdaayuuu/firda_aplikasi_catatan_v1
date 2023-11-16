import React from "react";

function NoteItemBody({ title, fill, createdAt }) {
    return (
        <div className="note-item_body">
            <h3 className="note-item_title">{title}</h3>
            <p className="note-item_fill">{fill}</p>
            <p className="note-item_createdAt">{createdAt}</p>
        </div>
    );
}

export default NoteItemBody;