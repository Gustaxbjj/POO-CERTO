import NavBar from '../components/NavBar'
import TituloSerie from '../components/TituloSerie';
// import Idade from '../imgHome/imgidade.jpg'
import './Home.css'
// import Sakamoto from '../imgHome/Sakamoto.webp'


function Home(){

    return(
        <div className='tela-home'>
          
            <div className='navbar'>
            <NavBar />
            </div>
            {/* <Idade /> */}

                <div className='titulo-serie'>

                    <TituloSerie/>
                </div>

        </div>  
        ); }

export default Home