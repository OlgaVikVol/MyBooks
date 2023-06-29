import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/news">Новости библиотеки</Link>
        </li>

        <li>
          <Link to="/staff">Сотрудники библиотеки</Link>
        </li>

        <li>
          <Link to="/events">Мероприятия библиотеки</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
