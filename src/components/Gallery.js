import { GalleryItem } from "./GalleryItem";
import { React } from "react";

export const Gallery = ({ data }) => {
  let songs = data.filter((el) => el.kind === "song");

  return (
    <div>
      {songs.map((el) => {
        return <GalleryItem track={el} key={el.trackId} />;
      })}
    </div>
  );
};
