import React from "react";
import "../Styles/App.css";

function Concept() {
    return (
        <div className="md:container w-auto mx-auto md:px-72 my-10 fader">
            <h1 className="text-center md:text-left my-8">
                Zuhause
            </h1>
            <h2 className="text-2xl my-8 text-color-primary text-center md:text-left">
                Une vidéo promotionnelle de votre commerce en 24h
            </h2>
            <div className="md:flex justify-between mx-8 md:mx-0">
                <div className="text-justify">
                    <p>Je m'appelle Gabrielle Margueritte, je suis une jeune rennaise de 21 ans et je viens de lancer <span className="font-bold">Zuhause</span>*. Je vous propose mes services de vidéaste en réalisant une courte vidéo publicitaire de votre commerce rennais. J'ai à coeur de travailler avec des passionné.e.s qui souhaitent offrir une visibilité à l'atmosphère de leur boutique et à leurs produits.</p>
                    <p className="my-8">* <span className="font-bold">Zuhause</span> veut dire "à la maison" en allemand. L'idée de mon travail est de mettre en avant l'attrait de votre boutique pour que vos clients s'y sentent comme à la maison et aient envie d'en ramener un petit bout chez eux avec vos produits.</p>
                    <p>Vous hésitez ?</p>
                    <p>Trois bonnes raisons de réserver un créneau avec <span className="font-bold">Zuhause</span> !</p>
                    <div className="ml-4 mt-2">
                        <li>Une prise de contact simple</li>
                        <li>Trois types de devis selon vos envies et votre budget</li>
                        <li>Un processus de réalisation rapide (24, 48 ou 72h)</li>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="gab.jpg" className="w-8/12 h-auto" alt="PP Gabrielle" />
                </div>
            </div>
            <div className="mt-8 text-center">
                <a className="btn btn-outline-primary text-xl hover:border-solid" href="/Portfolio">Portfolio</a>
            </div>
        </div>
    )
}

export default Concept