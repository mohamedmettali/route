import React from "react";
import "./App.css";
import moviesData from "./movies";
import useFilter from "./useFilter";
import ReactStars from "react-stars";
import FormModal from "./FormModal";
import Modal from "react-modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDescription from "./MovieDescription";
import MovieTrailer from "./MovieTrailer";
import MovieList from "./MovieList";

function App() {
  Modal.setAppElement("#root");

  const {
    movies,
    setMovies,
    titleFilter,
    minStarsFilter,
    setTitleFilter,
    setMinStarsFilter,
  } = useFilter(moviesData);

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleStarsChange = (newRating) => {
    setMinStarsFilter(newRating);
  };

  const addHandler = (newMovie) => {
    console.log(newMovie);
    setMovies([...movies, newMovie]);
  };


  
  return (
    <BrowserRouter>
      <div className="App">
        <h1>List of Movies</h1>

        <div>
          <label>
            Title:
            <input
              type="text"
              value={titleFilter}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            <ReactStars
              count={5}
              value={minStarsFilter || 0}
              onChange={handleStarsChange}
              size={24}
              color2={"#ffd700"}
            />
          </label>
        </div>
     

        <Routes>
          <Route
            path={"/movies/description/:id"}
            element={<MovieDescription movies={movies} />}
          />

          <Route
            path={"/movies/trailer/:id"}
            element={<MovieTrailer />}
          />
           <Route
            path={"/"} element={<MovieList  moviesData={moviesData}/>}
          />
         <Route path="/add" element={<FormModal addHandler={addHandler} />} />
        </Routes>

        <FormModal addHandler={addHandler} />
      </div>
    </BrowserRouter>
  );
}

export default App;
