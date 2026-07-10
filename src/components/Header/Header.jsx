import { Link, NavLink } from "react-router";
import { menuItems } from "../../data/menu";
import logoLumiere from "../../assets/images/logo-lumiere.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="header__brand">
          <img
            src={logoLumiere}
            alt="Logo Grupo Lumière"
            className="header__logo"
          />

          <div className="header__texts">
            <strong className="header__title">Grupo Lumière</strong>
            <span className="header__subtitle">
              Smart Cities · UFERSA Angicos
            </span>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Menu principal">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contato" className="header__cta">
          Fale com o grupo
        </Link>
      </div>
    </header>
  );
}