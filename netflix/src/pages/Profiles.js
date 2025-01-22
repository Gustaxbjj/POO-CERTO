import './Profiles.css'
import SelecaoPerfil from '../components/SelecaoPerfil'

/*importação das imagens*/ 
import chase from "../img/chase.webp"
import marshall from "../img/marshall.png"
import rocky from "../img/rocky.png"
import skye from "../img/skye.jpg"



function Profiles(){
    const usuario1 = {nome: "Talys", foto: marshall}
    const usuario2 = {nome: "fernando", foto: rocky}
    const usuario3 = {nome: "diego", foto: skye}
    const usuario4 = {nome: "maria", foto: chase}
    const usuarios = [usuario1,usuario2,usuario3,usuario4]


    return(
        <SelecaoPerfil listaDeUsuarios={usuarios}/>
    )
}

export default Profiles
