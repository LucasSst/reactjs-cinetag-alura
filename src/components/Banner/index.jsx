import styles from './Banner.module.css';

const  Banner = ({ imagem }) => {
    return (
        <div className={styles.cape}
            style={{ backgroundImage: `url('/assents/imagens/banner-${imagem}.png')` }}></div>
    )
}

export default Banner;