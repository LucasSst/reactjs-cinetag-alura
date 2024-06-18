// eslint-disable-next-line no-unused-vars
import styles from './Player.module.css';
import Banner from '../../components/Banner'
import Title from '../../components/Title'
import { useParams } from 'react-router-dom';
import videos from '../../json/db.json'
import NotFound from '../NotFound';
const Player = () => {
    const parameters = useParams();
    const video = videos.find((video) => video.id === Number(parameters.id))

    if(!video) return <NotFound/>
    
    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link} title={video.title} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
            </section>
        </>
    )
}

export default Player;