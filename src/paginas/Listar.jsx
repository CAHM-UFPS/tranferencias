import Tabla from "../components/Tabla";
import EncTabla from "../components/EncTabla";

function Listar({ transferencias }) {
    return (
        <div>
            <div>
                <h3>{transferencias.length>0? 'Transferencias Realizadas' : 'No hay transferencias'}</h3>
            </div>
            <div className='container shadow p-3 mb-5 bg-white rounded' id='contenido'>
                <table className="table">
                    <EncTabla />
                    {transferencias.map((datos) => (
                        <Tabla
                            key={datos.id}
                            datos={datos}
                        />
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Listar;