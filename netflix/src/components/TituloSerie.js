import  './TituloSerie.css'
import Nomeserie from '../imgHome/Round6Nome.png'
import BtnAssistir from './BtnAssistir';
import BtnInfo from './BtnInfo';
import Carrosel from './Carrosel'
import Carrosel2 from './Carrosel2'
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
                <img src={Nomeserie} className='Nomedaserie' />
            {/* <Nomeserie /> */}
            <div className='nomedaserie'>
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


            <Carrosel />
            <Carrosel2 />

        </div>


       
    
    );
}
export default TituloSerie;