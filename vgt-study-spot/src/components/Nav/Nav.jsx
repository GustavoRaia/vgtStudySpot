import "./Nav.css"
import Logo from "../../logo.svg"

const Nav = () => (
        <div className="barra-nav">
            <ul className="barra-nav_lista">
                <li className="barra-nav_item"><a className="barra-nav_A" href="./">StudySpot</a></li>
                <li className="barra-nav_item"><a className="barra-nav_A" href="./quiz">Quiz</a></li>
            </ul>
        </div>
);

export default Nav;