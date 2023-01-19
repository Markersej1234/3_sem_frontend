import {NavLink} from "react-router-dom";

function NavbarComp() {

    const getClass = ({isActive}) => (isActive ? "nav-active" : null)

    return (
        <header className="container">
            <nav className="container">
                <NavLink to={"/"} className={getClass}>3 Sem Eksamen</NavLink>
                <NavLink to={"/about"} className={getClass}>About</NavLink>
                <NavLink to={"/login"} className={getClass}>Login</NavLink>
                <NavLink to={"/joke"} className={getClass}>Joke</NavLink>
                <NavLink to={"/event"} className={getClass}>Event</NavLink>
                <NavLink to={"/createevent"} className={getClass}>Create</NavLink>

                
            </nav>
        </header>
    );
}

export default NavbarComp;