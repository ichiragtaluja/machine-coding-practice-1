import "./Book.css";

import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useData } from "../../context/DataProvider";
import { TiTick } from "react-icons/ti";

export const Book = ({ book, category }) => {
  const { categories, setAllBooks, allBooks } = useData();

  const [selectedCategory, setSelectedCategory] = useState(book.status);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeCategoryHandler = (book, cat) => {
    setSelectedCategory(cat);
    console.log("selectedCategory", selectedCategory);
    setAllBooks(
      allBooks.map((aBook) =>
        aBook.id !== book.id ? aBook : { ...aBook, status: cat }
      )
    );
    setIsMenuOpen(false);
  };

  return (
    <div className={`book-container ${category}`}>
      <div className="book-card">
        <img src={book?.image} alt={book?.name} />
        <p>{book?.name}</p>
      </div>

      <div>
        {!isMenuOpen && (
          <AiFillCaretDown
            className="menu-btn"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        )}
        {isMenuOpen && (
          <div className="menu-cont">
            {categories?.map((cat) => (
              <div key={cat} className="category-container">
                {book.status === cat && (
                  <div>
                    <TiTick />
                  </div>
                )}
                <p
                  className="category"
                  onClick={() => changeCategoryHandler(book, cat)}
                >
                  {cat}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
