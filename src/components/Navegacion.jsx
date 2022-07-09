import {Link} from 'react-router-dom';

function Navegacion() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className="navbar-brand" to="/">Transferencias</Link>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='registro'>Registrar</Link>
                        <Link className="nav-link" to='listar'>Listar</Link>
                        <Link className="nav-link" to='mistransf'>Mis Transferencias</Link>
                        <Link className="nav-link" to='recibidas'>Recibidas</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navegacion;