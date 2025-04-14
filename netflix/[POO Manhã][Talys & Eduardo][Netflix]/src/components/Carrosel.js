import  './Carrosel.css' 
import lacasa from '../imgCarrosels/lacasa.jpeg'
import lucifer from '../imgCarrosels/lucifer.jpeg'
import moshuku from '../imgCarrosels/mushoku.jpeg'
import narcos from '../imgCarrosels/narcos.jpeg'
import suits from '../imgCarrosels/suits.jpeg'
import unsolved from '../imgCarrosels/unsolved.jpeg'
import vampiro from '../imgCarrosels/vampiro.jpeg'
import wolf from '../imgCarrosels/wolf.jpeg'
import oz from '../imgCarrosels/OZ.webp'
import ruptura from '../imgCarrosels/ruptura.jpeg'
import mentalista from '../imgCarrosels/mentalista.jpeg'

function SeriesDub(){
    return(
    <div className='Carrosel'>
        
        <span className='Dub'>
            Séries estrangeiras dubladas em português
        </span>

        <div className='imgs'>
   <img src={lacasa} className='logo'/>
   <img src={lucifer} className='logo'/>
   <img src={moshuku} className='logo'/>
   <img src={narcos} className='logo'/>
   <img src={suits} className='logo'/>
   <img src={unsolved} className='logo'/>
   <img src={vampiro} className='logo'/>
   <img src={wolf} className='logo'/>
   <img src={oz} className='logo'/>
   <img src={ruptura} className='logo'/>
   <img src={mentalista} className='logo'/>

        </div>
    </div>
    );
}

export default SeriesDub;