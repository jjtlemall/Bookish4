import React from "react";

const BookDetail = ({ book }) => {
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">{getDescriptionFor(book)}</p>
    </div>
  );
};
export default BookDetail;

const getDescriptionFor = (book) => {
  return book.description ? book.description : book.name;
};