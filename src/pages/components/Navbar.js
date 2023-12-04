import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
    return (
    <>
    <header className="Navbar">
        <p>TechCap</p>
        <nav>
            <ul>
            <li>
                <Link to="/ProjectOrbit" className="link">Beranda</Link>
            </li>
            <li>
                <Link to="/ProjectOrbit/deteksi" className="link">Fitur</Link>
            </li>
            <li>
                <a to="#footer" className="link" onClick = {(e)=>{
                e.preventDefault();
                window.scrollTo({
                top: document.querySelector("#footer").offsetTop,
                behavior: "smooth",
                });}}>Kontak</a>
            </li>
            </ul>
        </nav>
    </header>
    </>
    )
  };
  
export default Navbar;