import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import { Book } from "../../components/Book/Book";
import { MdOutlineArrowBack } from "react-icons/md";

export const Search = () => {
  const [input, setInput] = useState("");
  const { allBooks } = useData();

  const searchedBooks = input.length
    ? allBooks?.filter((book) =>
        book?.name?.toUpperCase()?.includes(input.toUpperCase())
      )
    : [];

  return (
    <div>
      <div className="search-nav">
        <Link to="/home">
          <MdOutlineArrowBack size={35} />
        </Link>
        <div>
          <input
            className="search-input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search for any book"
          />
        </div>
      </div>
      <div className="books-container">
        {searchedBooks?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
