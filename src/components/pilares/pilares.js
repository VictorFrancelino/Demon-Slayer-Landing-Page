import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './pilares.css';
import GiyuTomioka from '../../assets/img/Giyu Tomioka.jpg';
import KyojuroRengoku from '../../assets/img/Kyojuro Rengoku.jpg';
import GyomeiHimejima from '../../assets/img/Gyomei Himejima.png';
import MitsuriKanroji from '../../assets/img/Mitsuri Kanroji.webp';
import MuichiroTokito from '../../assets/img/Muichiro Tokito.jpg';
import ObanaiIguro from '../../assets/img/Obanai Iguro.jpg';
import SanemiShinazugawa from '../../assets/img/Sanemi Shinazugawa.webp';
import TengenUzui from '../../assets/img/Tengen Uzui.webp';
import ShinobuKocho from '../../assets/img/Shinobu Kocho.jpg';

const pilares = [
    { id: 1, name: "Giyu Tomioka", image: GiyuTomioka, description: "Giyu Tomioka é o Pilar da Água, conhecido por sua personalidade calma e reservada. Ele tem uma presença imponente, raramente demonstrando emoções, o que muitas vezes o faz parecer distante e frio. Giyu é extremamente habilidoso com a Respiração da Água, utilizando técnicas fluidas e graciosas que imitam os movimentos da água em combate. Ele é um dos primeiros a reconhecer o potencial de Tanjiro e Nezuko, protegendo-os de seus colegas Caçadores de Demônios. Sua história é marcada por tragédias pessoais, incluindo a perda de sua irmã e seu melhor amigo Sabito, o que molda seu caráter sombrio e determinado." },
    { id: 2, name: "Kyojuro Rengoku", image: KyojuroRengoku, description: "Kyojuro Rengoku é o Pilar das Chamas, conhecido por sua personalidade vibrante e entusiasmo contagiante. Ele é um guerreiro apaixonado e otimista, sempre disposto a ajudar os outros com um sorriso no rosto. Sua técnica de Respiração das Chamas é poderosa e destrutiva, permitindo-lhe realizar ataques ferozes e devastadores. Kyojuro é um defensor fervoroso da justiça e da proteção dos inocentes, inspirado pelos ensinamentos de seu pai, o ex-Pilar das Chamas. Sua coragem e altruísmo são exemplares, e ele sacrifica sua vida heroicamente para proteger seus companheiros e passageiros do Trem Infinito." },
    { id: 3, name: "Gyomei Himejima", image: GyomeiHimejima, description: "Gyomei Himejima é o Pilar da Rocha, o mais forte dos Hashira em termos de força física. Ele é um monge gentil e compassivo, sempre rezando e demonstrando uma profunda espiritualidade. Gyomei é cego, mas suas habilidades sensoriais compensam sua falta de visão, permitindo-lhe lutar com precisão e poder extraordinários. Ele utiliza uma técnica de Respiração da Rocha, que combina força bruta e defesa impenetrável. Sua arma é uma corrente com um machado de batalha, que ele maneja com destreza letal. Gyomei tem um passado trágico, tendo perdido os órfãos que cuidava para demônios, o que o levou a se tornar um Caçador de Demônios para evitar que outras crianças sofressem o mesmo destino." },
    { id: 4, name: "Mitsuri Kanroji", image: MitsuriKanroji, description: "Mitsuri Kanroji é a Pilar do Amor, uma jovem alegre e afetuosa com um coração enorme. Ela é incrivelmente forte, graças a sua densidade muscular única, que lhe permite realizar feitos físicos impressionantes. Mitsuri utiliza a técnica de Respiração do Amor, caracterizada por movimentos rápidos e graciosos que podem ser tanto defensivos quanto ofensivos. Sua arma é uma espada flexível que se assemelha a um chicote, permitindo ataques imprevisíveis e de longo alcance. Apesar de sua aparência delicada e personalidade gentil, Mitsuri é uma combatente feroz e determinada. Ela se juntou aos Hashira para encontrar um marido mais forte que ela, acreditando que seu incrível poder a tornava inadequada para um relacionamento comum." },
    { id: 5, name: "Muichiro Tokito", image: MuichiroTokito, description: "Muichiro Tokito é o Pilar da Névoa, conhecido por sua personalidade distraída e frequentemente desinteressada. Ele é o mais jovem dos Hashira, mas suas habilidades são incomparáveis. Muichiro utiliza a técnica de Respiração da Névoa, que confunde e desorienta seus inimigos com movimentos rápidos e evasivos. Ele é um prodígio, tendo se tornado um Hashira em apenas dois meses após se tornar um Caçador de Demônios. Muichiro tem uma história de amnésia, inicialmente incapaz de lembrar seu passado. No entanto, ao recuperar suas memórias, ele se lembra de sua trágica infância e do assassinato de seus pais por demônios, o que intensifica sua determinação de proteger os outros." },
    { id: 6, name: "Obanai Iguro", image: ObanaiIguro, description: "Obanai Iguro é o Pilar da Serpente, um guerreiro enigmático e severo. Ele possui um comportamento rígido e uma adesão estrita às regras, muitas vezes criticando aqueles que não seguem o código dos Caçadores de Demônios. Obanai utiliza a técnica de Respiração da Serpente, que imita os movimentos sinuosos e imprevisíveis das cobras, permitindo ataques rápidos e precisos. Sua arma é uma espada ondulada, semelhante a uma serpente, que ele maneja com agilidade. Obanai tem um profundo amor por Mitsuri Kanroji, embora seja reservado sobre seus sentimentos. Seu passado é sombrio, tendo crescido em uma família cruel que o forçou a adotar comportamentos semelhantes aos de serpentes." },
    { id: 7, name: "Sanemi Shinazugawa", image: SanemiShinazugawa, description: "Sanemi Shinazugawa é o Pilar do Vento, conhecido por sua personalidade impetuosa e temperamento explosivo. Ele é um combatente feroz, sempre à procura de uma luta e desafiando constantemente seus limites. Sanemi utiliza a técnica de Respiração do Vento, caracterizada por movimentos rápidos e poderosos que criam cortes afiados como lâminas de vento. Sua aparência é marcada por inúmeras cicatrizes, evidência de suas muitas batalhas contra demônios. Sanemi tem uma relação complicada com seu irmão mais novo, Genya, que também é um Caçador de Demônios. Seu passado é repleto de dor e perda, tendo perdido sua família para demônios, o que alimenta seu ódio implacável contra essas criaturas." },
    { id: 8, name: "Tengen Uzui", image: TengenUzui, description: "Tengen Uzui é o Pilar do Som, um homem extravagante e flamboyant. Ele é conhecido por sua personalidade vibrante e seu amor por tudo que é \"flamboyant\". Tengen utiliza a técnica de Respiração do Som, que envolve ataques rítmicos e sincronizados que explodem como fogos de artifício. Ele luta com duas grandes espadas Nichirin, conectadas por uma corrente, que ele maneja com destreza e força. Tengen tem três esposas, com quem mantém uma relação poligâmica baseada no respeito e na igualdade. Seu passado como ninja o moldou em um guerreiro astuto e calculista, sempre analisando seus oponentes para encontrar suas fraquezas." },
    { id: 9, name: "Shinobu Kocho", image: ShinobuKocho, description: "Shinobu Kocho é a Pilar do Inseto, conhecida por sua aparência delicada e sorriso constante. Apesar de sua aparência frágil, Shinobu é uma guerreira mortal, utilizando venenos para compensar sua falta de força física. Ela utiliza a técnica de Respiração do Inseto, que incorpora movimentos rápidos e precisos, semelhantes aos de um inseto. Sua arma é uma espada Nichirin modificada para injetar veneno em seus inimigos. Shinobu tem um profundo ódio por demônios, resultado da morte de sua irmã mais velha, Kanae, nas mãos de um demônio. No entanto, ela mantém uma fachada amigável e otimista, escondendo sua dor e raiva para motivar seus companheiros." },
]

const Pilares = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="mb-5">
                <h2>Os Pilares</h2>
                <p>Clique na imagem de algum personagem para mais informações</p>
            </div>
            <div className="div-pilares-img row">
                {pilares.map(pilar => (
                    <div key={pilar.id} className="col-4">
                        <motion.div
                            layoutId={pilar.id}
                            onClick={() => setSelectedId(pilar.id)}
                        >
                            <motion.img
                                className="rounded-4 w-auto mb-4 img-fluid"
                                src={pilar.image}
                                alt={pilar.description}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="overlay"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div className="overlay-content d-flex">
                            <motion.img
                                className="pilares-motion-img-selected w-50 ms-5 rounded-4 img-fluid"
                                src={pilares.find(p => p.id === selectedId).image}
                                alt={pilares.find(p => p.id === selectedId).description}
                            />
                            <motion.div className="w-50 ms-5 me-5">
                                <motion.h5 id="pilares-motion-div-name">{pilares.find(p => p.id === selectedId).name}</motion.h5>
                                <motion.p className="text-start">{pilares.find(p => p.id === selectedId).description}</motion.p>
                                <motion.span id="pilares-motion-div-span">Clique novamente para retornar</motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Pilares;