import Tabla from "../components/Tabla";
import EncTabla from "../components/EncTabla";

function Listar({ transferencias }) {
    return (
        <div>
            <div>
                <h3>Transferencias Realizadas</h3>
            </div>
            <div>
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