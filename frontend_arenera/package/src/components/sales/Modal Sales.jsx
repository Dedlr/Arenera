import React from 'react';
import { useEffect, useState } from "react";
import { getSale} from "../../services/saleService.jsx";
import { show_alerta } from "../../fuctions";


function VentanaModal({ id, setId, setSales, handleModalClose }) {


    const [date, setDate] = useState("");
    const [client, setClient] = useState("");
    const [detail, setDetail] = useState("");
    const [total, setTotal] = useState("");
    const [cancel, setCancel] = useState("");
   

    useEffect(() => {
        async function loadSale() {
            if (id) {
                const { data } = await getSale(id)
                setDate(data.date)
                setClient(data.client)
                setDetail(data.detail)
                setTotal(data.total)
                setCancel(data.cancel)
            }
        }
        loadSale()
    }, [id])


    return (
        <div>


                <div id="modalVentas" className="modal fade" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h3 className="text-center">Detalle de la Venta </h3> 
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
                                        <i className="fa-solid fa fa-truck"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="date"
                                        className="form-control"
                                        placeholder="Fecha"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa fa fa-usd"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="client"
                                        className="form-control"
                                        placeholder="Cliente"
                                        value={client}
                                        onChange={(e) => setClient(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa fa fa-usd"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="detail"
                                        className="form-control"
                                        placeholder="Detalle"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                    ></input>
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
    
        </div>
    )
}

export default VentanaModal