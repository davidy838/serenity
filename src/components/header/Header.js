import "./Header.css";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <Link to="/" className="link"><h1 className="h1">Serenity</h1></Link>
        </header>
    );




}
export default Header;