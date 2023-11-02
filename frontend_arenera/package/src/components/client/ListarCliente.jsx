import React, { useEffect, useState } from 'react'
import "../../assets/css/client.css";
import VentanaModal from './VentanaModal';



function ListaClientes({ clients, handleModalClose, handelDelete }) {
    const [id, setId] = useState("")
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [clientss, setClients] = useState([]);

    if (!clients || clients.length === 0) {
        return <div>No hay clientes para mostrar.</div>;
    }

    const handelUpdate = (e, client) => {
        e.preventDefault();
        setId(client)
    }


    return (
        <div>
            <div className="row mt-3 flexbox-align">
                <div className=" offset-0 offset-lg-0">
                    <div className="table-responsive">
                        <table className="table">
                            <thead >
                                <tr>
                                    <th scope="col" style={{ fontSize: '20px' }}>#</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Nombre</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Apellido</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Nit</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Telefono</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Direccion</th>
                                </tr>
                            </thead>

                            <tbody className="table-group-divider">
                                {clients.map((client, i) => (
                                    <tr key={client.id}>
                                        <td scope="row">{i + 1}</td>
                                        <td>{client.first_name}</td>
                                        <td>{client.last_name}</td>
                                        <td>{client.nit}</td>
                                        <td>{client.phone_number}</td>
                                        <td>{client.adress}</td>

                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalCliente"
                                                type="button"
                                                onClick={event => handelUpdate(event, client.id)}
                                            >
                                                <i className="fa-solid fa-edit"></i>
                                            </button>
                                            &nbsp;
                                            <button
                                                onClick={() => handelDelete(client.id, client.first_name)}
                                                className="btn btn-danger"
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            < VentanaModal setId={setId}
                id={id}
                setClients={setClients}
                handleModalClose={handleModalClose}
            />
        </div>

    )
}

export default ListaClientes