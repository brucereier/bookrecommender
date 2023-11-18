import BookCard from "./BookCard";
import axios from 'axios';
import React, {useState, useEffect} from 'react';


function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const searchBooks = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_GOOGLE_BOOKS_API_URL, {
            params: {
                q: `isbn: 9780804139038`,
                key: process.env.REACT_APP_GOOGLE_API_KEY,
            },
            });
            setBooks(response.data.items);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        };

        searchBooks();
    }, []);

    return(
        books.map((book, index) => (
            <BookCard key = {index} book = {book}/>
          ))
    );
}

export default BookList;