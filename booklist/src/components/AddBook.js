import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';


export default function AddBook() {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_BOOK', book: {
                title: title,
                author: author
            }
        })
        setTitle('');
        setAuthor('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="book title" onChange={(e) => setTitle(e.target.value)} value={title} required />
                <input type="text" placeholder="book author" onChange={(e) => setAuthor(e.target.value)} value={author} required />
                <input type="submit" value="add book" />

            </form>

        </div>
    )
}
