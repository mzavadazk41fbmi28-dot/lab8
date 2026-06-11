import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/"><img src="/img/logo.png" alt="logo" className="logo" /></Link>
            <ul className="menu">
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/contacts">Контакти</Link></li>
            </ul>
        </nav>
    );
}