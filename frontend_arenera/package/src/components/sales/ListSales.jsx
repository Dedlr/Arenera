import React, { useEffect, useState } from 'react'
import '../../assets/css/sales.css'
import VentanaModal from './Modal Sales.jsx'
function ListSales ({sales,handleModalClose}) {

    
    const [id, setId] = useState("")
    const [saless, setSales] = useState([]); 

    if (!sales || sales.length === 0) {
        return <div>No hay ventas para mostrar.</div>;
    }

    const handelDetail = (e, sale) => {
        e.preventDefault();
        setId(sale)
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
                                    <th scope="col" style={{ fontSize: '20px' }}>Fecha</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Cliente</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Total</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Cancelado</th>
                                    <th scope="col" style={{ fontSize: '20px' }}>Usuario</th>
                                </tr>
                            </thead>

                            <tbody className="table-group-divider">
                                {sales.map((sale, i) => (
                                    <tr key={sale.id}>
                                        <td scope="row">{i + 1}</td>
                                        <td>{sale.date}</td>
                                        <td>{sale.client.first_name+' '+sale.client.last_name}</td>
                                        <td>{sale.total}</td>
                                        <td>
                                        <span className={`status-dot ${sale.cancel ? 'green' : 'red'}`}></span>
                                        </td>
                                        <td>{sale.user.username}</td>

                                        <td>
                                        <button
                                                className="btn btn-warning"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalVentas"
                                                type="button"    
                                                onClick={event => handelDetail(event, sale.id)}                    
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                            &nbsp;

                                            <button
                                        
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
                setSales={setSales}
                handleModalClose={handleModalClose}
            />

        </div>

    )
}

export default  ListSales