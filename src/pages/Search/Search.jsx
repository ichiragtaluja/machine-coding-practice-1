import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import { Book } from "../../components/Book/Book";

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
      <Link to="/home">Home</Link>
      <h1>Search</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
        <div>
          {searchedBooks?.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};
