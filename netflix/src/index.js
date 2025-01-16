import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './components/reportWebVitals';
import SelecaoPerfil from './components/SelecaoPerfil';
import NavBar from './components/NavBar';
import Menulateral from './components/Menulateral'

/*importação das imagens*/ 
import chase from "./img/chase.webp"
import marshall from "./img/marshall.png"
import rocky from "./img/rocky.png"
import skye from "./img/skye.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));
//--------------------------------------------------------
const usuario1 = {nome: "Talys", foto: marshall}
const usuario2 = {nome: "fernando", foto: rocky}
const usuario3 = {nome: "diego", foto: skye}
const usuario4 = {nome: "maria", foto: chase}

const usuarios = [usuario1,usuario2,usuario3,usuario4]
//------------------------------------

root.render(
  <React.StrictMode>
    <NavBar />

    <SelecaoPerfil listaDeUsuarios={usuarios} />
    <Menulateral />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
