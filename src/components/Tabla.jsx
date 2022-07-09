function Tabla({ datos }) {
    const { emisor, receptor, fecha, monto } = datos;

    return (
        <tbody>
            <tr>
                <td>{emisor}</td>
                <td>{receptor}</td>
                <td>{fecha}</td>
                <td>${Number(monto).toLocaleString('es-CO')}</td>
            </tr>
        </tbody>
    );
}

export default Tabla;