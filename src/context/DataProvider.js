import React, { createContext, useContext, useState } from "react";
import { books } from "../data/data";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const booksInDatabase = books;
  const [allBooks, setAllBooks] = useState(booksInDatabase);

  console.log("allBooks", allBooks);

  const categories = ["Currently Reading", "Want To Read", "Read", "None"];
  return (
    <DataContext.Provider value={{ allBooks, setAllBooks, categories }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
