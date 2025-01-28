/* criem o componente config */
/* Ele será a nossa pagina de configuração do Netflix */
// Por enquanto, essa página só terá o menu lateral 

import './Config.css'

import Menulateral from '../components/Menulateral';

function Config(){
    return(
      <div>
            <Menulateral />
      </div>      
    );
}

export default Config;