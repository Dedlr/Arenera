import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardText, CardImg, CardGroup } from "reactstrap";
import React, { useEffect, useState } from "react";
import { getSale,getSales } from "../../services/saleService.jsx"
import ListSales from "./ListSales.jsx";
import AgregarVenta from "./AddSale.jsx";
import { Link } from 'react-router-dom'

const ShowSale = () => {

    const [sales, setSales] = useState([]);
    const [id, setId] = useState("")
    const [aux, setAux] = useState(false)


    useEffect(() => {
        let isMounted = true;
        getSales().then((data) => {
            if (isMounted) {
                setSales(data);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);
    

    const handleModalClose = () => {
        getSales().then((data) => {
            console.log(data)
            setSales(data.rows);
        });
    };


    return (
        <div>

            <Row>
                <Col xs="10" md="8" sm="8" className="col-title" >
                    <Card color="danger">
                        <CardTitle tag="h6" className=" p-2 mb-0">
                            <div className="title-pages">
                                Ventas
                            </div>
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
 
            <div >
            <div className="row">
                <div className="col-md-3">
                    <div className="d-grid mx-auto">
                    <Link to="/agregar-venta" className="btn btn-secondary">
                      <i className="fa-solid fa-circle-plus"></i> Agregar Venta
                    </Link>
                    </div>
                </div>
            </div>    
         </div>


            <ListSales sales={sales} handleModalClose={handleModalClose} />
        </div>
    );

};

export default ShowSale;
