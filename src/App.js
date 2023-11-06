import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Detail from "./pages/Detail.jsx";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
