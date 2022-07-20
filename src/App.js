import React from 'react';
import Welcome from "./Welcome";
import Game from "./Game";

function App() {
    const [PageOn, setPageOn] = React.useState(<Welcome />)

    function pageOnActive() {
        setPageOn(<Game />);
    }
    
    return(
        PageOn
    );
}

export default App;