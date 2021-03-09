import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [],
        () => {
            const LocalData = localStorage.getItem('books');
            return LocalData ? JSON.parse(LocalData) : []
        });


    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])


    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;
