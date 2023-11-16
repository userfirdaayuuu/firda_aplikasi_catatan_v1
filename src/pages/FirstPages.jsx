import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { deleteNote, getNotes } from '../utils/data';
import '../style/styles.css';

function FirstPage(props) {
    
    const [ notes, setNotes] = useState([])

    const [keyword, setKeyword] = useState('');
    useEffect(() => {
        const tada = getNotes();
        setNotes(tada)
    })

    const onDeleteHandler = (id) => {
        deleteNote(id);
        setNotes(getNotes());
    };

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
    };

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section>
            <h1 className='title'>Notes</h1>
            <input
            className='search-bar'              
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    onKeywordChangeHandler(e.target.value)
                }}
                value={keyword}
            />
            <NoteList
                notes={filteredNotes}
                onDelete={onDeleteHandler}
            />
        </section>
    );
}

export default FirstPage;
