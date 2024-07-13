import React from "react";
import BannerImage from '../assets/img/Banner.webp'
import './banner.css';

const Banner = () => {
    return (
        <div className="banner-div">
            <div className="m-4 pt-5 pb-5 d-flex align-items-center">
                <div className="banner-text me-0 me-md-3 w-100 w-md-50">
                    <h1>Bem-vindo ao Mundo de Demon Slayer</h1>
                    <p>Descubra o universo emocionante de Demon Slayer (Kimetsu no Yaiba). Acompanhe a jornada de Tanjiro Kamado enquanto ele enfrenta demônios para salvar sua irmã Nezuko e vingar sua família. Explore nossos conteúdos sobre personagens, arcos da história, episódios, e curiosidades. Mergulhe nessa aventura épica e sinta a emoção de Demon Slayer!</p>
                </div>
                <img className="d-none d-md-flex rounded-4 w-50" src={BannerImage} alt="Demon Slayer Banner"/>
            </div>
        </div>
    );
};

export default Banner;