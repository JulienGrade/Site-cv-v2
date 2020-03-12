/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from "react-router-dom";

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import desktopImage from '../../public/image/Background.png';
import mobileImage from '../../public/image/Background.png';
import Skills from "./pages/Skills";
import Realisation from "./pages/Realisation";
import Formation from "./pages/Formation";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
        <>
            <div style={{
                backgroundImage: `url(${imageUrl}`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                width: "100%",
                height: "auto"}}>
                <HashRouter>
                    <div className="container pt-5">
                        <Switch>
                            <Route path="/skills" component={Skills}/>
                            <Route path="/realisations" component={Realisation}/>
                            <Route path="/formation" component={Formation}/>
                            <Route path="/experiences" component={Experience}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/" component={HomePage}/>
                        </Switch>
                    </div>
                </HashRouter>

            </div>
        </>
    )
};


const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
