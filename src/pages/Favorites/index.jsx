import Banner from '../../components/Banner';
import Title from '../../components/Title';
import styles from './Favorites.module.css';
import Card from '../../components/Card';
import { useFavoriteContext } from "../../context/Favorites"
const Favorites = () => {
    const { favorite } = useFavoriteContext()
    console.log(favorite)
    return (
        <>
            <Banner imagem={'favoritos'} />
            <Title>
                <h1>Meus favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((fav) => <Card {...fav} key={fav.id} />
                )}
            </section>
        </>
    )
}

export default Favorites; 