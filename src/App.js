import React from "react";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

const App = () => {
  return (
    <div className="gallery-container">
      {[...new Array(20)].map((el, index) => (
        <PhotoCard key={index} index={index} />
      ))}
    </div>
  );
};

export default App;
