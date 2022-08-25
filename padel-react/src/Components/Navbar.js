import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.Classlist.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaBars></FaBars>
            </button>
        </header>
    );
}





export default Navbar;