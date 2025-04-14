import './BtnInfo.css'
import { RxInfoCircled } from "react-icons/rx";


function BtnInfo(){
    return(
        <div className='info'>
            <RxInfoCircled />   
            <span>Mais Informações</span>
        </div>
    )
}

export default BtnInfo 