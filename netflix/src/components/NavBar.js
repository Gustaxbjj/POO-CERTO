import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../img/netflix-logo-transparente.png'

import { MdOutlinePersonOutline } from "react-icons/md";



// As entradas de um componente devem estar entre chaves.
// Isso é uma exigência do React
    function NavBar(){

        return (
            <div className='nav-bar'>
                <img className='logotipo' src={logo} />
                
          
                <a className='link'> Início </a>
                <a className='link'> Series </a>
                <a className='link'> Bombando </a>
                <a className='link'> Minha lista </a>
                <a className='link'> Navegar por idioma </a>
    
                
                <div className='icon-conta'>

                <Link to='/Config' className='iconss'>

                <MdOutlinePersonOutline className='humano' />
                <a className='txt-conta'> Conta</a> 

                </Link>

                </div>

            </div>
    );
}

export default NavBar;