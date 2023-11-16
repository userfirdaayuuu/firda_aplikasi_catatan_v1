import React from "react";
import PropType from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                ))
            }
        </div>
    );
}

NoteList.propType = {
    notes: PropType.arrayOf(PropType.object).isRequired,
    onDelete: PropType.func.isRequired
}

export default NoteList;