import './SelecaoPerfil.css'
import BotaoVazado from './BotaoVazado'
import CardPerfil from './CardPerfil'


function SelecaoPerfil(){

    

    return (
        <div className='selecao-perfil'>
            <h2 className='titulo'>Quem está assistindo?</h2>
            <div className='container-cards'>
                <CardPerfil />
                <CardPerfil />
                <CardPerfil />
                <CardPerfil />
            </div>
            <BotaoVazado />
        </div>
    );
}

export default SelecaoPerfil;