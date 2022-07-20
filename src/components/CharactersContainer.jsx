import { CharacterCard } from './CharacterCard'
import '../stylesheets/characters-container.scss'
import React from 'react'

export const CharactersContainer = ({ characters }) => {
  return (
    <div
      className="container-cards">
      {characters.map(character => (
        <React.Fragment key={character.id}>
          <CharacterCard {...character} />
        </React.Fragment>
      ))
      }
    </div>
  );
}

export default CharactersContainer;