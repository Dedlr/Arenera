import React, { useState } from 'react'


function AgregarCliente() {

    const [id, setId] = useState("")

    const handelCreate = () => {
        setId()
    }

    return (
        <div >
            <div className="row">
                <div className="col-md-3">
                    <div className="d-grid mx-auto">
                        <button
                            onClick={handelCreate}
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalCliente"
                        >
                            <i className="fa-solid fa-circle-plus">Agregar Cliente</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarCliente