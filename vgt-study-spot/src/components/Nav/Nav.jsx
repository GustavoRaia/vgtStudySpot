import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => (
        <div className="barra-nav">
            <ul className="barra-nav_lista">
                <li className="barra-nav_item"><Link className="barra-nav_A" to="/">StudySpot</Link></li>
                <li className="barra-nav_item"><Link className="barra-nav_A" to="/quiz">Quiz</Link></li>
            </ul>
        </div>
);

export default Nav;