import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        //Jsx
        <div className="App" >
            <NavBar itemsCart="2"/>
            <ItemListContainer title="&iexcl;Bienvenidos a nuestro carrito!"/>
        </div>
    );
}

export default App;