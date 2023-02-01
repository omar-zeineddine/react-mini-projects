import React from "react";
// import { useGlobalContext } from "../context";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  // invoke function setSearchTerm from context.jsx when typing
  console.log("useGlobalContext", useGlobalContext());
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
};

export default SearchForm;
