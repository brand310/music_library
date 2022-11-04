import { React, useState } from "react";

export function SearchBar({ handleSubmit }) {
  let [term, setTerm] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, term)}>
      <input
        type="text"
        placeholder="Enter a search term here"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
