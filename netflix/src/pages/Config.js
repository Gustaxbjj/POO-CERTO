/* criem o componente config */
/* Ele será a nossa pagina de configuração do Netflix */
// Por enquanto, essa página só terá o menu lateral 

import './Config.css'

import Menulateral from '../components/Menulateral';
import Barrasuperioracount from '../components/Barrasuperioracount';

function Config(){
    return(
      <div className='tudo'> 

      <div>
      <Barrasuperioracount/>
            <Menulateral />


      </div>

            <div className='areacentral'>
              <span> Conta</span>
              <span> Detalhes da Assinatura</span>

                  <div className='info-cartao' >
                      <span> Assinante desde julho de 2015</span>
                      <span> Plano Padrão</span>
                      <span>Proximo pagamento 31 de Janeiro de 2025</span>
                      
                  </div>

            </div>
      </div>      
    );
}

export default Config;