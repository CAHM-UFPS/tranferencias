import { useState } from "react";
import Buscar from "../components/Buscar";
import Recibidos from "../components/Recibidos";

function Recibidas({transferencias}){
    const [recibidas, setRecibidas]=useState([]);

    return(
        <div>
            <div>
                <h3>Busque las transferencias recibidas con su cedula</h3>
            </div>
            <Recibidos 
                transferencias={transferencias}
                recibidas={recibidas}
                setRecibidas={setRecibidas}
            />
        </div>
    );
}

export default Recibidas;