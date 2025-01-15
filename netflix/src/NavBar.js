import './NavBar.css'
import logo from './img/netflix-logo-transparente.png'
import { MdCreditCard } from "react-icons/md";


// As entradas de um componente devem estar entre chaves.
// Isso é uma exigência do React
function NavBar(){

    return (
        <div className='nav-bar'>
            <img className='logotipo' src={logo} />
            <MdCreditCard color='#ffffffff'/>
            <a className='link'> Início </a>
            <a className='link'> Series </a>
            <a className='link'> Bombando </a>
            <a className='link'> Minha lista </a>
            <a className='link'> Navegar por idioma </a>
        </div>
    );
}

export default NavBar;