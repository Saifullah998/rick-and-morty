import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetail =() =>{
    const { id } = useParams();
  const [character, setCharacter] = useState(null);


  useEffect(()=>{
    fetchCharacter();
  },[])

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  if (!character) {
    return <p>Loading...</p>;
  }
  return (
    <div className="character-detail ">
        <div className="">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
}

export default CharacterDetail