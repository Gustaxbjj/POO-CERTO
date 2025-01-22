// 1ª seção: importações ----------------------------------------
import './CardPerfil.css'
import {Link} from 'react-router-dom'

/*As entradas de um componente devem estar entre chaves*/ 

function CardPerfil({usuario}){
    return (
        <Link to={'/home'} className='card-perfil'>
            <img className='foto' src={usuario.foto}/>
            <span className='nome'> {usuario.nome} </span>
        </Link>
    );
}

// 3ª seção: exportação ----------------------------------------
export default CardPerfil;