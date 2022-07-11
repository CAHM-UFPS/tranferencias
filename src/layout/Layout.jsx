import {Outlet} from 'react-router-dom';
import Navegacion from '../components/Navegacion';

function Layout(){
    return(
        <div>
            <nav>
                <Navegacion/>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;