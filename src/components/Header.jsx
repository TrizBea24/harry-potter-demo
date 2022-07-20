import logo from '../images/harry-potter-logo.png';
import audio from '../audio/hp-audio.mp3';
import '../stylesheets/header.scss';
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";

export const Header = ({ nameFilter, setNameFilter, homeFilter, setHomeFilter, alphaOrder, setAlphaOrder }) => {
  return (
    <header className="header">
      <img src={logo} alt="Harry Potter logo" />
      <audio className="header__audio" controls loop>
        <source src={audio} type="audio/mp3" />
      </audio>
      <div className="header__filter-group">
        <input type="text" className="header__filter-group__name-input" aria-label="character filter"
          placeholder="Search by first name..." onChange={(e) => setNameFilter(e.target.value)}
          value={nameFilter}
        />
        <div>
          <select onChange={(e) => setHomeFilter(e.target.value)} value={homeFilter} >
            <option value="all">All</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
          <button
            type="button"
            onClick={() => setAlphaOrder(!alphaOrder)}
          >{alphaOrder ? <BsSortAlphaDown /> : <BsSortAlphaUp />}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;