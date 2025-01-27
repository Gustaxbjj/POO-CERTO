import  './Carrosel2.css' 
import euphoria from '../imgCarrosels/euphoria.jpeg'
import goldles from '../imgCarrosels/goldles.jpeg'
import  gossip from '../imgCarrosels/gossip.jpeg'
import homens from '../imgCarrosels/homens.jpeg'
import supermales from '../imgCarrosels/supermales.jpeg'
import residente from '../imgCarrosels/resident.jpeg'
import portras from '../imgCarrosels/portras.jpeg'
import shazam from '../imgCarrosels/shazam.jpeg'

function SeriesDub(){
    return(
    <div className='Carrosel'>
        
        <span className='Dub'>
           Novidades na Netflix
        </span>

        <div className='imgs'>
   <img src={euphoria} className='logo'/>
   <img src={goldles} className='logo'/>
   <img src={gossip} className='logo'/>
   <img src={homens} className='logo'/>
   <img src={supermales} className='logo'/>
   <img src={residente} className='logo'/>
   <img src={portras} className='logo'/>
   <img src={shazam} className='logo'/>


        </div>
    </div>
    );
}

export default SeriesDub;