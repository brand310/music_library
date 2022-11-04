<<<<<<< Updated upstream
import { useState } from "react";
=======
import { React, useState } from "react";
import { Link } from "react-router-dom";

>>>>>>> Stashed changes
export function GalleryItem({ track }) {
  let [isExpanded, setIsExpanded] = useState(false);

  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };
  // styles ---------------------------------------

  // views ----------------------------------------
  const simpleView = (
    <div>
      <h3>{track.trackName}</h3>
      <h4>{track.collectionName}</h4>
    </div>
  );
  const detailedView = (
    <div>
      <h2>{track.trackName}</h2>
      <h3>{track.collectionName}</h3>
      <h4>{track.primaryGenreName}</h4>
      <h4>{track.releaseDate}</h4>
    </div>
  );

  return (
    <div onClick={clickHandler} style={{ display: "inline-block" }}>
      {/* This simple ternary shows the simple view when 'view' is false! */}
      {isExpanded ? detailedView : simpleView}
    </div>
  );
}

export default GalleryItem;
