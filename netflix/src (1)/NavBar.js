import './NavBar.css'
import logo from './img/netflix-logo-transparente.png'

// As entradas de um componente devem estar entre chaves.
// Isso é uma exigência do React
function NavBar(){

    return (
        <div className='nav-bar'>
            <img className='logotipo' src={logo} />
            <a className='link'> Início </a>
        </div>
    );
}

export default NavBar;