import './App.css';

function App() {
    return (
        <div className="container">
            <p className="search-devs">Search Devs</p>
            <div className="search">
                <input className="search-campo-busca" placeholder="Type the username here..." />
                <button className="btn-buscar">
                    <img className="lupa" src="../img/lupa.png" alt="" />
                    Buscar
                </button>
            </div>
        </div>
    );
}

export default App;