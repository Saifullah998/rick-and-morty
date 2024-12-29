import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card border border-gray-700 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition hover:scale-105 max-w-xs w-full">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-60 object-cover border-b border-gray-700"
      />
      <div className="p-4">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2 break-words">{character.name}</h2>
        <div className="flex justify-between items-center mt-auto">
          <Link
            to={`/character/${character.id}`}
            className="px-4 py-2 text-sm font-bold text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 hover:shadow-lg transition"
          >
            View Details
          </Link>
          <p className="text-sm italic text-gray-600">
            Status:{" "}
            <span
              className={`font-semibold ${
                character.status === "Alive"
                  ? "text-green-500"
                  : character.status === "Dead"
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
            >
              {character.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
