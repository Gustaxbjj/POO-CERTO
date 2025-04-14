import  './Menulateral.css'
import { MdHome } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";


// não vou usar agora
// import { SiNetflix } from "react-icons/si";
{/* <div className='netflix-icon'>   <SiNetflix/> </div> */}
// 

function Menulateral() {
    
    return(

 <div className='Paidetodos'>

            


        <div className="Menu-lateral">
            <div className='voltar'>
            <FaArrowLeft />
            <span>Voltar à Netflix</span>
            </div>
       
            <div className='icons'> < MdHome className='icon'/> 
            <span className='text'> Visão geral</span> </div>

            <div className='icons'>   <MdCreditCard className="icon" /> 
            <span className='text'> Assinatura</span> </div>

            <div className='icons'>   <MdOutlineShield className="icon"/> 
             <span className='text'> Segurança</span> </div>

            <div className='icons'> <MdComputer className="icon" /> 
            <span className='text'> Aparelhos</span> </div>

            <div className='icons'>    <MdOutlineEmojiEmotions className="icon" />  
            <span className='text'> Perfis</span> </div>
         
         </div>


 </div>
)
}

export default Menulateral;