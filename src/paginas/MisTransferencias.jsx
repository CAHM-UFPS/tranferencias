import { useState, useEffect } from 'react';
import Buscar from '../components/Buscar';

function MisTransferencias({ transferencias }) {
    const [resultado, setResultado] = useState([]);

    return (
        <div>
            <div>
                <h3>Busque las transferencias realizadas con su cedula</h3>
            </div>
            <Buscar
                transferencias={transferencias}
                resultado={resultado}
                setResultado={setResultado}
            />
        </div>
    );
}

export default MisTransferencias;