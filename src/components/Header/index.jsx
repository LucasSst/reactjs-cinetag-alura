import { Link } from "react-router-dom";
import logo from '/assents/imagens/logo.png';
import styles from './Header.module.css';
import HeaderLink from "../HeaderLink";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="./" >
                <img  src={logo}  alt="Logo do cinetag"/>
            </Link>
            <nav>
                <HeaderLink link='./'>
                    Home
                </HeaderLink>
                <HeaderLink link='./favorites'>
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
};

export default Header;