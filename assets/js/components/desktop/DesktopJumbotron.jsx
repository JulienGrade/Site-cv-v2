import React from 'react';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import profilPic from "../../../../public/image/julien.png";
import Typical from "react-typical";




const DesktopJumbotron = (props) => {
    const profil = profilPic;

    return (
        <>
            <Jumbotron>
                <img className="rounded profil-pic" src={profil}/>
                <h1>Julien Grade</h1>
                <p>Je suis un développeur
                    <Typical
                        steps={[
                            ' Web',
                            2000,
                            ' et Web mobile'
                            ,2000,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </p>
                <p>
                    Je suis actuellement
                    <Typical
                        steps={[
                            ' en recherche de stage Symfony',
                            2000,
                            ' en recherche de stage en Back-office',
                            2000,
                            ' à l\'écoute d\'opportunités',
                            1000,
                            ' en train de coder',
                            1500,
                            ' en train d\'apprendre quelque chose',
                            2000,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />

                </p>
                <p>
                    Je suis passionné par
                    <Typical
                        steps={[
                            ' le Back-office',
                            2000,
                            ' Symfony',
                            2000,
                            ' PHP',
                            1000,
                            ' React-js',
                            1500,
                            ' découvrir de nouvelles technologies',
                            2000,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </p>
                <p>
                    Au quotidien j'utilise
                    <Typical
                        steps={[
                            ' PHP Storm',
                            2000,
                            ' GitHub',
                            2000,
                            ' Symfony serve',
                            1000,
                            ' Xampp',
                            1500,
                            ' Postman',
                            2000,
                            ' Mysql',
                            1500,
                            ' Bootstrap',
                            1000,
                            ' Doctrine',
                            1000,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </>
    );
};

export default DesktopJumbotron;