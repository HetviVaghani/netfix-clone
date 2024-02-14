import React from 'react';
import CardSlider from "./CardSlider";

export default function Slider({movies}) {
  const getMoviesFromRange = (from,to) => {
    return movies.slice(from,to);
  };

  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)}/>
      <CardSlider title="New Releases" data={getMoviesFromRange(0,20)}/>
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(0,30)}/>
      <CardSlider title="Popular on YOLO" data={getMoviesFromRange(0,40)}/>
      <CardSlider title="Action Movies" data={getMoviesFromRange(0,50)}/>
      <CardSlider title="Epics" data={getMoviesFromRange(0,60)}/>
    </div>
  );
}
