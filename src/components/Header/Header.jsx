import style from "./Header.module.css"

function Header() {
  return (
    <header>
      <h1>Корпоративная библиотека</h1>
      <img alt="User" src="user.png" className={style.img} />
    </header>
  );
}

export default Header;
