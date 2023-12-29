import React from "react";
import PropType from "prop-types";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from './DeleteButton';

function NoteItem({ title, fill, createdAt, onDelete, id }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} fill={fill} createdAt={createdAt} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

// NoteItem.propType = {
//     title: PropType.string.isRequired,
//     fill: PropType.string.isRequired,
//     createdAt: PropType.string.isRequired,
//     onDelete: PropType.func.isRequired,
//     id: PropType.number.isRequired
// }

export default NoteItem;