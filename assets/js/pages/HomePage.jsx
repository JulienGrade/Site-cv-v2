import React, {useState, useEffect} from 'react';
import DesktopJumbotron from "../components/desktop/DesktopJumbotron";
import MobileJumbotron from "../components/mobile/MobileJumbotron";

const HomePage = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const Jumbotron = windowWidth >= 650 ? <DesktopJumbotron/> : <MobileJumbotron/>;

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
            <h1 className="text-center">Qui suis-je ?</h1>
            <div>{Jumbotron}</div>
        </>
    );
};

export default HomePage;