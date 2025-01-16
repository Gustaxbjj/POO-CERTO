// 1ª seção: imports
// O ./ é para indicar que o arquivo está na mesma pasta.
import './BotaoVazado.css'

// 2ª seção: o componente
function BotaoVazado(){
    return (
            <span className='botao-vazado'>
                GERENCIAR PERFIS
            </span>
    );
}

// 3ª seção: a exportação
export default BotaoVazado;