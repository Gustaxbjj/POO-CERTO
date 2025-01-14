// 1ª seção: importações ----------------------------------------
import './CardPerfil.css'
import perfil from './perfil.png'

function CardPerfil({usuario}){
    return (
        <div className='card-perfil'>
            <img className='foto' src={perfil}/>
            <span className='nome'>Nome</span>
        </div>
    );
}

// 3ª seção: exportação ----------------------------------------
export default CardPerfil;