
import { useNavigate } from "react-router-dom";
import "../stylesheets/character-card.scss";

export const CharacterCard = ({ id, name, lastname, house, pic }) => {

  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/characters/${id}`)}
    >
      <div
        style={{
          backgroundImage: `url(${pic})`,
        }}
        className="cardpic">
        <div
          className="badge"
          style={{
            backgroundColor: house === 'Gryffindor' ? 'red' : house === 'Slytherin' ? 'green' : house === 'Ravenclaw' ? 'yellow' : 'blue'
          }}>
          {house}
        </div>
      </div>
      <div className="card-body">
        <h1 className="card-name">{name} <br /> {lastname}</h1>
      </div>
    </div>
  );
}
