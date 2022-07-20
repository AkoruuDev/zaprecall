import Welcome from "./Welcome";
import Game from "./Game";

let pageOn = <Welcome />

function pageOnActive() {
    pageOn = <Game /> 
}

function App() {
    return(
        pageOn
    );
}

export default App;