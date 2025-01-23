import  './TituloSerie.css'
import Nomeserie from './Nomeserie'
import BtnAssistir from './BtnAssistir';
import BtnInfo from './BtnInfo';
import { SiNetflix } from "react-icons/si";
import { TbNumber16Small } from "react-icons/tb";
import { FaVolumeHigh } from "react-icons/fa6";

function  TituloSerie (){

    return(
    
        <div className='icons'>
            
                <div className='icons-netflix'>
                    <SiNetflix className='icone'/>
                    <span className='serie'> Série</span>
                </div>

            <div className='nomedaserie'>
            <Nomeserie />
            </div>

                <div className='icons-info'>
                <BtnAssistir/>
                <BtnInfo/>    

                <div className='icon-idade-vol'>
            
                    <FaVolumeHigh className='vol'/>
                    <span className='meio'> | </span>
                    <TbNumber16Small className='idade'/>
                </div>
            </div>

        </div>

    );
}
export default TituloSerie;