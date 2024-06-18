import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.css';

// eslint-disable-next-line react/prop-types
const HeaderLink = ({link, children}) => {
    return (
        <Link to={link} className={styles.link}>
            {children}
        </Link>
    )

}

export default HeaderLink;