function Tabla({datos}) {
    const {emisor, receptor, fecha, monto}=datos;
    
    return (
        <tr>
            <td>{emisor}</td>
            <td>{receptor}</td>
            <td>{fecha}</td>
            <td>${Number(monto).toLocaleString('es-CO')}</td>
        </tr>
    );
}

export default Tabla;