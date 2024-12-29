import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCharacters();
  }, [page, search]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
      );
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      console.error(error);
      setCharacters([]);
      setTotalPages(1); 
    }
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white font-sans shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400">Rick and Morty Characters</h1>

        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900"
          />
          <span className="absolute right-4 top-2 text-gray-500">🔍</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-14 p-4">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No characters found</p>
        )}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default Home;
