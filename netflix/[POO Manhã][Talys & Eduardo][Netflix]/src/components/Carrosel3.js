import  './Carrosel3.css' 
import flash from '../imgCarrosels/flash.jpg'
import boruto from '../imgCarrosels/boruto.webp'
import cobrakai from '../imgCarrosels/cobrakai.jpg'
import chiquititas from '../imgCarrosels/chiquititas.jpg'
import kaisen from '../imgCarrosels/kaisen.webp'
import loki from '../imgCarrosels/loki.jpg'
import neymar from '../imgCarrosels/neymar.webp'
import things from '../imgCarrosels/things.jpg'



function SeriesDub(){
    return(
    <div className='Carrosel3'>
        
        <span className='Dub'>
            Séries estrangeiras dubladas em português
        </span>

        <div className='imgs'>

<div className='spanNum'>
<span className='numero'>1</span>
   <img src={flash} className='logos'/>
</div>

<div className='spanNum'>
   <span className='numero'> 2</span>
   <img src={boruto} className='logos'/>
</div>

<div className='spanNum'>
<span className='numero'>3</span>
<img src={cobrakai} className='logos'/>
</div>

<div className='spanNum'>
<span className='numero'>4</span>
<img src={chiquititas} className='logos'/>
</div>

<div className='spanNum'>
<span className='numero'>5</span>
<img src={kaisen} className='logos'/>
</div>

<div className='spanNum'>
<span className='numero'>6</span>
<img src={loki} className='logos'/>
</div>

<div className='spanNum'>
<span className='numero'>7</span>
<img src={neymar} className='logos'/>
</div>

<div className='spanNum'>
<span className='numero'>8</span>
<img src={things} className='logos'/>
</div>


 </div>
    </div>
    );
}

export default SeriesDub;