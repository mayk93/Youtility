import React from "react";
import PropTypes from "prop-types";
import Book from "../Book";

const Library = ({libraryId, books}) => (
    <>
        <hr className="rounded"/>
        <div>This is library: {libraryId}</div>
        <div className="book-container">
            {books.map(book => <Book key={book.isbn} {...book} />)}
        </div>
        <hr className="rounded"/>
    </>
);

Library.propTypes = {
    libraryId: PropTypes.string,
    books: PropTypes.array,
};

export default Library;
