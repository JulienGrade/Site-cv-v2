import React from 'react';
import Logo from '../../../../public/image/Logo.png';

const DesktopHeader = (props) => {
    const logo = Logo;

    return (
        <>
            <div className="text-center">
                <img className="img-fluid desktopLogo" src={logo} />
            </div>
        </>
    );
};

export default DesktopHeader;