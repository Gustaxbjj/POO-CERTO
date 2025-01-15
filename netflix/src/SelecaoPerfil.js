import './SelecaoPerfil.css'
import BotaoVazado from './BotaoVazado'
import CardPerfil from './CardPerfil'


function SelecaoPerfil( {listaDeUsuarios}){

   const listaDeCards =  listaDeUsuarios.map(user => < CardPerfil usuario={user}/>);

    return (
        <div className='selecao-perfil'>
            <h2 className='titulo'>Quem está assistindo?</h2>
            <div className='container-cards'>
                {listaDeCards}

            </div>
            <BotaoVazado />
        </div>
    );
}

export default SelecaoPerfil;