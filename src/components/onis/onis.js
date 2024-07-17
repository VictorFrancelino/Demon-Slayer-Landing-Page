import React from "react";
import './onis.css';
import oni1 from '../../assets/img/Oni 1.jpg';
import oni2 from '../../assets/img/Oni 2.webp';
import oni3 from '../../assets/img/Oni 3.png';

const Onis = () => {
    return (
        <div className="container-fluid container-onis pt-5 pb-5">
            <h2 className="mb-5">Os Onis</h2>
            <div className="div-oni d-flex mb-5">
                <p className="ms-5 me-5 w-50 text-start">Os onis em "Demon Slayer" (Kimetsu no Yaiba) são criaturas sobrenaturais que possuem habilidades e poderes extraordinários. Criados a partir de humanos que consumiram o sangue de Muzan Kibutsuji, o primeiro e mais poderoso oni, essas entidades são imortais e têm uma força física impressionante, velocidade sobre-humana e a capacidade de regenerar seus corpos rapidamente. Essa regeneração permite que eles curem quase qualquer ferimento em questão de segundos, tornando-os adversários extremamente difíceis de derrotar. Além disso, cada oni desenvolve habilidades únicas, chamadas de "Blood Demon Arts" (Técnicas de Sangue Demoníaco), que variam amplamente, desde manipulação de fogo ou gelo até o controle de ilusões e sombras.</p>
                <img className="rounded-4 w-50 me-5" id="oni-1" src={oni1} alt="Primeira imagem de um Oni"/>
            </div>
            <div className="div-oni d-flex mb-5">
                <img className="rounded-4 w-50 ms-5" src={oni2} alt="Segunda imagem de um Oni"/>
                <p className="ms-5 me-5 w-50 text-start">Os onis são vulneráveis à luz solar, que é fatal para eles, fazendo com que se escondam e ataquem apenas durante a noite. Essa fraqueza crítica os obriga a viver nas sombras e a desenvolver estratégias complexas para capturar e devorar humanos, sua principal fonte de sustento. A organização Demon Slayer Corps foi criada para combater essa ameaça, com caçadores especializados treinados para eliminar onis usando espadas nichirin, que são forjadas com um minério especial que pode ferir e matar essas criaturas imortais. As espadas também são reforçadas com técnicas de respiração que aumentam a força e a resistência dos caçadores, permitindo-lhes enfrentar os onis em combate direto.</p>
            </div>
            <div className="div-oni d-flex">
                <p className="ms-5 me-5 w-50 text-start">Os onis, apesar de sua natureza monstruosa, mantêm resquícios de suas vidas humanas passadas. Muitos onis lutam contra impulsos e memórias de suas existências anteriores, criando um conflito interno entre sua fome insaciável por carne humana e os traços de humanidade que ainda possuem. Isso é particularmente evidente em personagens como Nezuko Kamado, que, apesar de ser transformada em oni, mantém uma forte aversão a ferir humanos e demonstra uma lealdade profunda à sua família. Esse dilema moral acrescenta uma camada de complexidade aos onis, tornando-os mais do que simples vilões e destacando os temas de perda, redenção e a luta pela humanidade presentes na série.</p>
                <img className="rounded-4 w-50 me-5" src={oni3} alt="Terceira imagem de um Oni"/>
            </div>
        </div>
    );
};

export default Onis;