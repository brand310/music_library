import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { GalleryItem } from "./GalleryItem";

export const Gallery = () => {
  let data = useContext(DataContext);
  let songs = data.filter((el) => el.kind === "song");

  return (
    <div>
      {data.map((el) => {
        return <GalleryItem track={el} key={el.trackId} />;
      })}
    </div>
  );
};
