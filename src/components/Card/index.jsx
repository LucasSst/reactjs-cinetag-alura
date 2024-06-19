/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../../context/Favorites';
import styles from './Card.module.css';
import favorite_full from '/assents/imagens/favorite.png';
import favorite_outline from '/assents/imagens/favorite_outline.png';

const Card = ({ id, titulo, capa }) => {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? favorite_full : favorite_outline;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => {
                    addFavorite({ id, titulo, capa })
                }} />
        </div>

    )
}

export default Card;