import React from 'react';
import { useEffect, useState } from "react";
import { createClient, updateClient, getClient, getClients } from "../../services/clientService";
import { show_alerta } from "../../fuctions";

function VentanaModal({ id, setId, setClients, handleModalClose }) {
 

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [nit, setNit] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [adress, setAddres] = useState("");

    useEffect(() => {
        async function loadClient() {
            if (id) {
                const { data } = await getClient(id)
                setFirstName(data.first_name)
                setLastName(data.last_name)
                setNit(data.nit)
                setPhoneNumber(data.phone_number)
                setAddres(data.adress)
            }
            else {

                setFirstName("")
                setLastName("")
                setNit("")
                setPhoneNumber("")
                setAddres("")
            }
        }
        loadClient()
    }, [id])

    const handleSubmit = async e => {
        e.preventDefault();
        const client = {
            first_name: first_name,
            last_name: last_name,
            nit: nit,
            phone_number: phone_number,
            adress: adress
        }

        if (id) {
            const result = await updateClient(id, client);
            console.log(result)
            show_alerta(result.data.message, result.status);
            if (result.status == 200) {
                document.getElementById('btnCerrar').click(); // Cierra la ventana modal
                handleModalClose()
                setId("")
            } else {
                console.log('-- Actualización fallida');
                show_alerta("Error", "error");
            }
        }
        else {
            console.log('Guardar datos')
            const result = await createClient(client);
            show_alerta(result.data.message, result.status);
            if (result.status == 201) {
                document.getElementById('btnCerrar').click(); // Cierra la ventana modal
                handleModalClose()
                setId("")
            } else {
                console.log('Creacion fallida');
                show_alerta("Error", "error");
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div id="modalCliente" className="modal fade" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h3 className="text-center">{id ? 'Editar Cliente' : 'Guardar Cliente'}</h3> 
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            
                            <div className="modal-body">
                                <input type="hidden" id="id"></input>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa fa-user-circle"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="form-control"
                                        placeholder="Nombre"
                                        value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa fa-user-circle"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="form-control"
                                        placeholder="Apellido"
                                        value={last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa fa-drivers-license"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="nit"
                                        className="form-control"
                                        placeholder="Nit"
                                        value={nit}
                                        onChange={(e) => setNit(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="phone_number"
                                        className="form-control"
                                        placeholder="Telefono"
                                        value={phone_number}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa fa-home"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="adress"
                                        className="form-control"
                                        placeholder="Direccion"
                                        value={adress}
                                        onChange={(e) => setAddres(e.target.value)}
                                    ></input>
                                </div>

                                <div className="d-grig col-6 mx-auto">
                                    <input type="submit" className="btn btn-success"
                                        value={id ? 'ACTUALIZAR' : 'GUARDAR'} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    id="btnCerrar"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    CERRAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default VentanaModal