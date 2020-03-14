import React from 'react';
import Typical from 'react-typical';

const DesktopWhoJumbotronText = (props) => {
    return (
        <>
            <Typical
                steps={['Hello',1000,'Hello world!',500]}
                loop={Infinity}
                wrapper="p"
            />
        </>
    );
};

export default DesktopWhoJumbotronText;