import React from 'react';

import {useHistory} from 'react-router-dom';

const AboutPage = () => {
    const history = useHistory();

    const showDetails = () => {
        history.push('/details')
    }
    console.log(history)
    return(
        <div>
            ABOUT
            <br />
            <button onClick={() => showDetails()}>Open details</button>
        </div>
    );
}

export default AboutPage;