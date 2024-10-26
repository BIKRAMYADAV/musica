import React from "react";
import { musicCardProps } from "../props/musicCardProps";

interface MusicCardProps {
   track: musicCardProps
}


const MusicCard: React.FC<MusicCardProps> = ({track}) => {
  return (
  
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src={track.albumCover} alt={track.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{track.title}</h2>
            <p className="text-gray-600">{track.artist}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-green-500 font-bold">{track.duration}</span>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">Play</button>
            </div>
          </div>
        </div>

  );
}

export default MusicCard