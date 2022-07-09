import {useState} from 'react';
import {generarId, formatearFecha} from '../helpers/index';

function Formulario({transferencias, setTransferencias}) {
    const [emisor, setEmisor]=useState("");
    const [receptor, setReceptor]=useState("");
    const [monto, setMonto]=useState(0);

    function handleSubmit(e){
        e.preventDefault();

        if([emisor, receptor, monto].includes("")){
            console.log("Hay Campos Vacíos");
            return;
        }

        if(Number(monto)<=0){
            console.log("Monto debe ser mayor a $0");
            return;
        }

        const objetoTransferencia={
            emisor,
            receptor,
            monto,
            fecha: formatearFecha(Date.now())
        }
        
        objetoTransferencia.id=generarId();
        setTransferencias([...transferencias, objetoTransferencia]);
        console.log("Guardado con exito");
        setEmisor("");
        setReceptor("");
        setMonto("");
    }

    return (
        <div className='shadow p-3 mb-5 bg-white rounded w-50' id='contenido'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emisor" className="form-label">Identificación Emisor</label>
                    <input type="text" className="form-control" id="emisor" placeholder="Ej: 12345-a" value={emisor} onChange={(e)=>{setEmisor(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="receptor" className="form-label">Identificación Receptor</label>
                    <input type="text" className="form-control" id="receptor" placeholder="Ej: 12345-a" value={receptor} onChange={(e)=>{setReceptor(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="monto" className="form-label">Monto</label>
                    <input type="number" className="form-control" id="monto" placeholder="Ej: $5000" value={monto} onChange={(e)=>{setMonto(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );
}

export default Formulario;