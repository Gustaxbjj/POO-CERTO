// 1ª seção: importações ----------------------------------------
import './CardPerfil.css'


/*As entradas de um componente devem estar entre chaves*/ 

function CardPerfil({usuario}){
    return (
        <div className='card-perfil'>
            <img className='foto' src={usuario.foto}/>
            <span className='nome'> {usuario.nome} </span>
        </div>
    );
}

// 3ª seção: exportação ----------------------------------------
export default CardPerfil;