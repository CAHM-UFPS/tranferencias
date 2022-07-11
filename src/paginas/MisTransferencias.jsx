import { useState } from 'react';

function MisTransferencias({ transferencias }) {
    const [cedula, setCedula] = useState("");
    //const [resultado, setResultado] = useState({});

    function buscar() {
        const objetoBusqueda = transferencias.filter((datos) => {
            return datos.emisor === cedula;
        });

        if (objetoBusqueda.length > 0) {
            console.log("Encontrado");
            console.log(objetoBusqueda);
        } else {
            console.log("No existen transferencias con este documento");
            //setResultado({});
        }
    }

    return (
        <div>
            <div>
                <h3>Busque las transferencias realizadas con su cedula</h3>
            </div>
            <div className='shadow p-3 mb-5 bg-white rounded w-50' id='contenido'>
                <div className="mb-3">
                    <label htmlFor="cedula" className="form-label">Ingrese su Cédula</label>
                    <input type="text" className="form-control" id="cedula" placeholder="Ej: 12345-a" value={cedula} onChange={(e) => { setCedula(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => { buscar() }}>Buscar</button>
            </div>
        </div>
    );
}

export default MisTransferencias;