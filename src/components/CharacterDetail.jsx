import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import "../stylesheets/character-detail.scss";
import { Link } from "react-router-dom";

const CharacterDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setCharacterById = (id) => {
    if (id) {
      setIsLoading(true);
      axios.get(`${process.env.REACT_APP_API_END_POINT}/character/${id}`)
        .then((response) => {
          if (Object.keys(response.data).length === 0) {
            navigate("/");
          }
          setCharacter(response.data)
        }).catch(error => console.log(error))
        .finally(() => {
          setIsLoading(false)
        }
        );
    }
  }

  useEffect(() => {
    setCharacterById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          <div className="article">
            <img className="article__image"
              src={character.pic}
              alt={character.name}
            />
            <div className="article__container">
              <p>First name: {character.name}</p>
              <p>Last Name: {character.lastname}</p>
              <p>Blood status: {character.bloodStatus}</p>
              <p>Patronus: {character.patronus}</p>
              <p>Wand: {character.wand}</p>
            </div>
          </div>
          <Link as='a' to="/" className="article__link">
            Back to characters list
          </Link>
        </>
      }
    </>
  )
}

export default CharacterDetails;