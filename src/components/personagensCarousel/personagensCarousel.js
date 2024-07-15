import React, { useState } from "react";
import './personagensCarousel.css'
import TanjiroImagem from '../../assets/img/Tanjiro.jpg'
import ZenitsuImagem from '../../assets/img/Zenitsu.jpg'
import InosukeImagem from '../../assets/img/Inosuke.png'
import NezukoImagem from '../../assets/img/Nezuko.webp'
import GiyuImagem from '../../assets/img/Giyu Tomioka.jpg'
import RengokuImagem from '../../assets/img/Kyojuro Rengoku.jpeg'
import MitsuriImagem from '../../assets/img/Mitsuri Kanroji.webp'
import ShinazugawaImagem from '../../assets/img/Sanemi Shinazugawa.webp'
import UzuiImagem from '../../assets/img/Tengen Uzui.webp'
import ObanaiImagem from '../../assets/img/Obanai Iguro.jpg'
import SakonjiImagem from '../../assets/img/Sakonji Urokodaki.jpg'
import MuzanImagem from '../../assets/img/Muzan Kibutsuji.webp'

const personagens = [
    { name: "Tanjiro Kamado", image: TanjiroImagem, description: "Descrição do Tanjiro Kamado." },
    { name: "Zenitsu Agatsuma", image: ZenitsuImagem, description: "Descrição do Zenitsu Agatsuma." },
    { name: "Inosuke Hashibira", image: InosukeImagem, description: "Descrição do Inosuke Hashibira." },
    { name: "Nezuko Kamado", image: NezukoImagem, description: "Descrição do Nezuko Kamado." },
    { name: "Giyu Tomioka", image: GiyuImagem, description: "Descrição do Giyu Tomioka." },
    { name: "Kyojuro Rengoku", image: RengokuImagem, description: "Descrição do Kyojuro Rengoku." },
    { name: "Mitsuri Kanroji", image: MitsuriImagem, description: "Descrição da Mitsuri Kanroji." },
    { name: "Sanemi Shinazugawa", image: ShinazugawaImagem, description: "Descrição do Sanemi Shinazugawa." },
    { name: "Tengen Uzui", image: UzuiImagem, description: "Descrição do Tengen Uzui." },
    { name: "Obanai Iguro", image: ObanaiImagem, description: "Descrição do Obanai Iguro." },
    { name: "Sakonji Urokodaki", image: SakonjiImagem, description: "Descrição do Sakonji Urokodaki." },
    { name: "Muzan Kibutsuji", image: MuzanImagem, description: "Descrição do Muzan Kibutsuji." }
]

const PersonagensCarousel = () => {
    const [selectedPersonagem, setSelectedPersonagem] = useState(null);

    const handleImageClick = (personagem) => {
        setSelectedPersonagem(personagem);
    };

    const handleBackClick = () => {
        setSelectedPersonagem(null);
    }

    return (
        <div className="d-flex flex-column pt-5 pb-5">
            <div>
                <h2>Personagens</h2>
                <p>Clique na imagem de algum personagem para mais informações</p>
            </div>
            <div className="personagens-div">
                {selectedPersonagem ? (
                    <div className="overlay" onClick={handleBackClick}>
                        <div className="overlay-content">
                            <p>{selectedPersonagem.description}</p>
                            <p>Clique aqui para voltar ao carrossel</p>
                        </div>
                    </div>
                ) : (
                    <div className="personagens-slide">
                        {personagens.concat(personagens).map((personagem, index) => (
                            <img
                                key={index}
                                className="rounded-4"
                                src={personagem.image}
                                alt={personagem.name}
                                onClick={() => handleImageClick(personagem)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonagensCarousel;