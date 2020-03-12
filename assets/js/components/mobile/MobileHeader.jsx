import React from 'react';
import Logo from '../../../../public/image/Logo.png';

const MobileHeader = (props) => {
    const logo = Logo;

    return (
        <>
            <div className="text-center">
                <img className="img-fluid w-50 mobileLogo" src={logo} />
            </div>
        </>
    );
};

export default MobileHeader;