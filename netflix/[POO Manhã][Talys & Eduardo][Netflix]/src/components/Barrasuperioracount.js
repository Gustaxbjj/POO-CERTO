import './Barrasuperioracount.css'
import logonetflix from "../img/netflix-logo-transparente.png"
import perfilzinho from "../img/rocky.png"


function Barrasuperioracount(){

    return(
       < div className='parte-superior'>
        <img src={logonetflix} className="icon-netflix"/>  
        <img src={perfilzinho} className="perfilzinho"/>  
        </div>
    );

    }
export default  Barrasuperioracount


