import React from 'react';
import Welcome from "./Welcome";
import Game from "./Game";

function App() {
    const [PageOn, setPageOn] = React.useState(<Welcome page={pageOnActive} />)

    function pageOnActive() {
        setPageOn(<Game />);
    }
    
    return(
        PageOn
    );
}

export default App;