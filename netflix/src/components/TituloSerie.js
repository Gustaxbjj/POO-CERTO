import  './TituloSerie.css'
// import Nomeserie from '../imgCarrosels/cavaleiroNome.jpeg'
import BtnAssistir from './BtnAssistir';
import Nomedaserie from './Nomeserie';
import BtnInfo from './BtnInfo';
import Carrosel from './Carrosel'
import Carrosel2 from './Carrosel2'
import Carrosel3 from './Carrosel3'
import { SiNetflix } from "react-icons/si";
import { TbNumber16Small } from "react-icons/tb";
import { FaVolumeHigh } from "react-icons/fa6";
{/* <img src={Nomeserie} className='Nomedaserie' /> */}

function  TituloSerie (){

    return(

        <div className='icons'>
            
                <div className='icons-netflix'>
                    <SiNetflix className='icone'/>
                    <span className='serie'> Série</span>
                </div>

            <Nomedaserie /> 

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
            <Carrosel3  />
        </div>


       
    
    );
}
export default TituloSerie;