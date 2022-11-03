import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Gallery } from "./components/Gallery";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArtistView } from "./components/ArtistView";
import { AlbumView } from "./components/AlbumView";

function App() {
  let [query, setQuery] = useState("");
  let [data, setData] = useState([]);
  let [message, setMesssage] = useState("Search for Music!");

  useEffect(() => {
    const fetchData = () => {
      document.title = `${query} Music`;
      fetch(`https://itunes.apple.com/search?term=${query}`)
        .then((response) => response.json())
        .then((result) => {
          setData(result.results);
        });
    };

    fetchData();
  }, [query]);

  const handleSubmit = (e, term) => {
    e.preventDefault();
    setQuery(term);
  };

  return (
    <>
      {message}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar handleSubmit={handleSubmit} />
                <Gallery data={data} />
              </>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
