import Tabla from "../components/Tabla";

function Listar({transferencias}) {
    return (
        <div>
            <div>
                <h3>Transferencias Realizadas</h3>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Emisor</th>
                            <th scope="col">Receptor</th>
                            <th scope="col">Fecha Transferencia</th>
                            <th scope="col">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transferencias.map((datos)=>(
                            <Tabla 
                                key={datos.id}
                                datos={datos}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Listar;