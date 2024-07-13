import React, { useEffect } from "react";
import './personagensCarousel.css'
import TanjiroImagem from '../assets/img/Tanjiro.jpg'
import ZenitsuImagem from '../assets/img/Zenitsu.jpg'
import InosukeImagem from '../assets/img/Inosuke.png'
import NezukoImagem from '../assets/img/Nezuko.webp'
import GiyuImagem from '../assets/img/Giyu Tomioka.jpg'
import RengokuImagem from '../assets/img/Kyojuro Rengoku.jpeg'
import MitsuriImagem from '../assets/img/Mitsuri Kanroji.webp'
import ShinazugawaImagem from '../assets/img/Sanemi Shinazugawa.webp'
import UzuiImagem from '../assets/img/Tengen Uzui.webp'
import ObanaiImagem from '../assets/img/Obanai Iguro.jpg'
import SakonjiImagem from '../assets/img/Sakonji Urokodaki.jpg'
import MuzanImagem from '../assets/img/Muzan Kibutsuji.webp'

const PersonagensCarousel = () => {
    useEffect(() => {
        const copy = document.querySelector(".personagens-slide").cloneNode(true);
        document.querySelector(".personagens-div").appendChild(copy);
    }, []);

    return (
        <div className="d-flex flex-column pt-5 pb-5">
            <div>
                <h2>Personagens</h2>
                <p>Clique na imagem de algum personagem para mais informações</p>
            </div>
            <div className="personagens-div">
                <div className="personagens-slide">
                    <img className="rounded-4" src={TanjiroImagem} alt="Tanjiro Kamado" />
                    <img className="rounded-4" src={ZenitsuImagem} alt="Zenitsu Agatsuma" />
                    <img className="rounded-4" src={InosukeImagem} alt="Inosuke Hashibira" />
                    <img className="rounded-4" src={NezukoImagem} alt="Nezuko Kamado" />
                    <img className="rounded-4" src={GiyuImagem} alt="Giyu Tomioka" />
                    <img className="rounded-4" src={RengokuImagem} alt="Kyojuro Rengoku" />
                    <img className="rounded-4" src={MitsuriImagem} alt="Mitsuri Kanroji" />
                    <img className="rounded-4" src={ShinazugawaImagem} alt="ShinazugawaImagem" />
                    <img className="rounded-4" src={UzuiImagem} alt="Tengen Uzui" />
                    <img className="rounded-4" src={ObanaiImagem} alt="Obanai Iguro" />
                    <img className="rounded-4" src={SakonjiImagem} alt="Sakonji Urokodaki" />
                    <img className="rounded-4" src={MuzanImagem} alt="Muzan Kibutsuji" />
                </div>
            </div>
        </div>
    );
};

export default PersonagensCarousel;