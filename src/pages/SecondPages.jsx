import React from "react";
import { addNote } from "../utils/data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import '../style/styles.css';

function SecondPages() {

    const navigate = useNavigate();
    function onAddNoteHandler(note) {
        addNote(note);
        navigate("/");
    }

    return (
        <section>
            <h1 className='title'>Add Notes</h1>
            <NoteInput addNote={onAddNoteHandler}/>
        </section>
    );
}

export default SecondPages;