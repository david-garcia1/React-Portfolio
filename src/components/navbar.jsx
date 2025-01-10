import { NavLink } from "react-router-dom"

export default function Navbar() {

    return(
        <div>
            <div>
                <h1>David Garcia</h1>
                <ul>
                    <li><NavLink to="/">About Me</NavLink></li> {/* This is the home page. */}
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                </ul>
            </div>
        </div>
    );
}