import {Outlet} from 'react-router-dom';
import Navegacion from '../components/Navegacion';

function Layout(){
    return(
        <div>
            <header>
                <Navegacion/>
            </header>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;