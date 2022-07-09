import Formulario from "../components/Formulario";

function Registro({transferencias, setTransferencias}){
    return(
        <div>
            <div>
                <h3>Ingrese los datos para realizar una transferencia</h3>
            </div>
            <div>
                <Formulario transferencias={transferencias} setTransferencias={setTransferencias}/>
            </div>
        </div>
    );
}

export default Registro;