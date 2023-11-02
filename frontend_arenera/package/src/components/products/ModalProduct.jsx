import React from 'react';
import { useEffect, useState } from "react";
import { getProduct,updateProduct} from "../../services/productService.jsx";
import { show_alerta } from "../../fuctions";


function VentanaModal({ id, setId, setProducts, handleModalClose }) {


    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        async function loadProduct() {
            if (id) {
                const { data } = await getProduct(id)
                setDescription(data.description)
                setPrice(data.price)
            }
        }
        loadProduct()
    }, [id])

    const handleSubmit = async e => {
        e.preventDefault();
        const product = {
            description: description,
            price: price,
        }

        if (id) {
            const result = await updateProduct(id, product);
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div id="modalProduct" className="modal fade" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h3 className="text-center">Editar Producto</h3> 
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
                                        id="description"
                                        className="form-control"
                                        placeholder="Nombre"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa fa fa-usd"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="price"
                                        className="form-control"
                                        placeholder="Precio"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    ></input>
                                </div>


                                <div className="d-grig col-6 mx-auto">
                                    <input type="submit" className="btn btn-success"
                                        value={'ACTUALIZAR'} />
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