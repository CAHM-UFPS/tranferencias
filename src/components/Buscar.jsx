import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import EncTabla from './EncTabla';
import Tabla from './Tabla';

function Buscar({ transferencias, resultado, setResultado }) {
    const [cedula, setCedula] = useState("");

    function exito(){
        toast.success("Búsqueda realizada correctamente", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function error(){
        toast.error("No existen transferencias con este documento", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function vacios(){
        toast.error("El campo cédula es requerido", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function buscar() {
        if([cedula].includes("")){
            vacios();
            return;
        }

        const objetoBusqueda = transferencias.filter((datos) => {
            return datos.emisor === cedula;
        });

        if (objetoBusqueda.length > 0) {
            exito();
            setResultado(objetoBusqueda);
        } else {
            error();
            setResultado([]);
        }
    }

    return (
        <div>
            <ToastContainer/>
            <div className='shadow p-3 mb-5 bg-white rounded w-50' id='contenido'>
                <div className="mb-3">
                    <label htmlFor="cedula" className="form-label">Ingrese su Cédula</label>
                    <input type="text" className="form-control" id="cedula" placeholder="Ej: 12345-a" value={cedula} onChange={(e) => { setCedula(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => { buscar() }}>Buscar</button>
            </div>
            {resultado.length > 0 ? (
                <div className='container shadow p-3 mb-5 bg-white rounded' id='contenido'>
                    <table className="table">
                        <EncTabla />
                        {resultado.map((datos) => (
                            <Tabla
                                key={datos.id}
                                datos={datos}
                            />
                        ))}
                    </table>
                </div>
                ) : (
                    null
                )
            }

        </div>
    );
}

export default Buscar;