import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

const Nav = () => (
    <div className="barra-nav">
        <div className="logo">
            <Link className="barra-nav_A" to="/"><img className="logo_img" src={Logo} alt="Logo" /></Link>
        </div>
        <ul className="barra-nav_lista">
            <li className="barra-nav_item"><Link className="barra-nav_A" to="/">Almanaque</Link></li>
            <li className="barra-nav_item"><Link className="barra-nav_A" to="/quiz">Quiz</Link></li>
        </ul>
    </div>
);

export default Nav;
