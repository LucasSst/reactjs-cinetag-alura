/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../../context/Favorites';
import styles from './Card.module.css';
import favorite_full from '/assents/imagens/favorite.png';
import favorite_outline from '/assents/imagens/favorite_outline.png';

const Card = ({ id, title, cape }) => {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? favorite_full : favorite_outline;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={cape} alt={title} className={styles.cape} />
                <h2>{title}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => {
                    addFavorite({ id, title, cape })
                }} />
        </div>

    )
}

export default Card;