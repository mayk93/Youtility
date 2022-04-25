import React from "react";
import PropTypes from "prop-types";
import book1 from './book_1.jpeg';
import book2 from './book_2.png';
import book3 from './book_3.png';


const randomBook = () => [book1, book2, book3][Math.floor(Math.random()*3)];

const Book = ({isbn, authors, title}) => (
    <div className="card">
        <img className="card-logo" src={randomBook()} alt="Book"/>
        <div className="card-box">
            <h4><b>{title}</b></h4>
            {authors.map(author => <p key={author}>{author}</p>)}
            <p>{isbn}</p>
        </div>
    </div>
);

Book.propTypes = {
    isbn: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
};


export default Book;