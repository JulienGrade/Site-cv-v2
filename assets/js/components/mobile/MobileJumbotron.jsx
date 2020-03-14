import React from 'react';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const MobileJumbotron = (props) => {
    return (
        <>
            <Jumbotron>
                <h1 className="text-center">Qui suis-je ?</h1>
                <p>
                    Après une carrière commerciale réussie, je souhaite me former au métier de développeur web et web mobile.
                    Dans ce but j'ai entamé une formation au sein de webforce 3 et je suis actuellement à la recherche
                    d'un stage d'une durée minimale de deux mois. Ce qui motive ce changement de vie professionnelle ?
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </>
    );
};

export default MobileJumbotron;