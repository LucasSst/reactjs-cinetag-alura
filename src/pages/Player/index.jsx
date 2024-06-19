import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner'
import Title from '../../components/Title'
// eslint-disable-next-line no-unused-vars
import styles from './Player.module.css';

import NotFound from '../NotFound';
const Player = () => {
    const [videos ,setVideos] = useState([]);
    const parameters = useParams();


    useEffect(()=> {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parameters.id}`)
        .then((r) => r.json())
        .then((data) => {
            setVideos(...data)
        }, [])

    })


    if(!videos) return <NotFound/>

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
                    src={videos.link} title={videos.titulo} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
            </section>
        </>
    )
}

export default Player;