import "./Books.css";

import React from "react";
import { useData } from "../../context/DataProvider";
import { Book } from "../Book/Book";

export const Books = ({ category }) => {
  const { allBooks } = useData();

  const booksByCategory = allBooks.filter((book) =>
    category ? book?.status === category : book
  );
  return (
    <div className="books-container">
      {booksByCategory?.map((book) => (
        <>
          <Book key={book?.id} book={book} category={category} />
        </>
      ))}
    </div>
  );
};
