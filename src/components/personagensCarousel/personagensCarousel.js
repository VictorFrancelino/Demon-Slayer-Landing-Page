import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import './personagensCarousel.css';
import TanjiroImagem from '../../assets/img/Tanjiro.jpg';
import ZenitsuImagem from '../../assets/img/Zenitsu.jpg';
import InosukeImagem from '../../assets/img/Inosuke.png';
import NezukoImagem from '../../assets/img/Nezuko.webp';

const personagens = [
    { name: "Tanjiro Kamado", image: TanjiroImagem, description: "Tanjiro Kamado é o protagonista de \"Demon Slayer\" (Kimetsu no Yaiba). Ele é um jovem amável e determinado que se torna um Caçador de Demônios após sua família ser massacrada por um demônio, exceto sua irmã Nezuko, que se transformou em um demônio. Tanjiro possui uma forte ética e compaixão, buscando vingança ao mesmo tempo em que tenta salvar Nezuko e combater outros demônios. Ele é habilidoso com a respiração de água, uma técnica de respiração especial que aumenta suas habilidades físicas e poderes de combate.Tanjiro Kamado é o protagonista de \"Demon Slayer\" (Kimetsu no Yaiba). Ele é um jovem amável e determinado que se torna um Caçador de Demônios após sua família ser massacrada por um demônio, exceto sua irmã Nezuko, que se transformou em um demônio. Tanjiro possui uma forte ética e compaixão, buscando vingança ao mesmo tempo em que tenta salvar Nezuko e combater outros demônios. Ele é habilidoso com a respiração de água, uma técnica de respiração especial que aumenta suas habilidades físicas e poderes de combate." },
    { name: "Zenitsu Agatsuma", image: ZenitsuImagem, description: "Zenitsu Agatsuma é um personagem complexo em \"Demon Slayer\" (Kimetsu no Yaiba), conhecido por sua dualidade entre covardia e bravura. Inicialmente apresentado como um espadachim medroso e inseguro, Zenitsu muda drasticamente quando entra em um estado de transe chamado \"Trovão e Relâmpago\", uma técnica de respiração que lhe concede habilidades sobre-humanas. Durante esse estado, ele demonstra uma habilidade excepcional com a espada, sendo capaz de derrotar demônios poderosos em segundos. Fora de seu estado de transe, Zenitsu é frequentemente visto como um personagem cômico, com medos exagerados e uma devoção ardente a Nezuko Kamado, por quem desenvolve sentimentos profundos. Sua personalidade dramática e suas reações exageradas criam momentos de alívio cômico no meio das batalhas intensas." },
    { name: "Inosuke Hashibira", image: InosukeImagem, description: "Inosuke Hashibira é um dos personagens mais físicos e instintivos de \"Demon Slayer\". Criado na floresta por javalis, Inosuke é selvagem e impulsivo, muitas vezes entrando em confrontos físicos antes de raciocinar. Ele é um mestre da respiração do vento, uma técnica que enfatiza a velocidade e a agilidade em combate. Suas habilidades são notáveis pela sua capacidade de adaptação rápida e seu estilo de luta altamente ofensivo. Inosuke é conhecido por seu uso constante de máscaras de javali, que refletem sua personalidade combativa e competitiva. Ele constantemente desafia seus próprios limites e os de seus companheiros, buscando sempre se provar e se superar em combate. Apesar de sua natureza abrasiva, ele desenvolve um forte senso de camaradagem com Tanjiro e Zenitsu, tornando-se um aliado confiável na luta contra os demônios." },
    { name: "Nezuko Kamado", image: NezukoImagem, description: "Nezuko Kamado é a irmã mais nova de Tanjiro, cuja vida mudou drasticamente ao ser transformada em um demônio. Apesar de sua nova natureza demoníaca, Nezuko mantém sua humanidade, desenvolvendo uma aversão instintiva a machucar seres humanos. Ela protege seus entes queridos e se torna uma aliada indispensável para Tanjiro, usando suas habilidades demoníacas para auxiliar nas batalhas. Nezuko é única entre os demônios por sua capacidade de dormir durante o dia dentro de uma caixa de bambu, o que a protege da luz solar que normalmente enfraquece os demônios. Com o tempo, ela aprende a controlar seus poderes demoníacos, usando-os para fortalecer suas habilidades de combate e proteger aqueles que ama. Sua relação próxima com Tanjiro é central para sua jornada, servindo como um lembrete constante de sua humanidade apesar de sua transformação." }
]

const PersonagensCarousel = () => {
    return (
        <div className="pt-5 pb-5 container-fluid">
            <h2 className='mb-5' id='text-personagens'>Personagens Principais</h2>
            <Swiper
                className='swiper-container'
                loop={true}
                modules={[Navigation, Autoplay, A11y]}
                navigation
                autoplay={{delay: 5000, pauseOnMouseEnter: true}}
            >
                {personagens.map((personagem, key) => (
                    <SwiperSlide key={key} className="d-flex container-fluid">
                        <img
                            className="rounded-4 ms-5 w-50"
                            src={personagem.image}
                            alt={personagem.name}
                        />
                        <div className='d-flex flex-column w-50 ms-5 me-5'>
                            <h2>{personagem.name}</h2>
                            <p className='text-start'>{personagem.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PersonagensCarousel;