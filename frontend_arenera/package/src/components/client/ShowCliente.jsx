import { Button, Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import "../../assets/css/client.css";
import React, { useEffect, useState } from "react";
import { getClients, createClient, updateClient } from "../../services/clientService";
import ListaClientes from "./ListarCliente";
import AgregarCliente from "./AgregarCliente";
import { deleteClient } from "../../services/clientService";
import { show_alerta } from "../../fuctions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [id, setId] = useState("")
    const [aux, setAux] = useState(false)


    useEffect(() => {
        let isMounted = true;
        getClients().then((data) => {
            if (isMounted) {
                setClients(data.rows);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);

    const handleModalClose = () => {
        console.log('---> refesh')
        getClients().then((data) => {
            console.log(data)
            setClients(data.rows);
        });
    };


    const handelDelete = (id, first_name) => {

        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: "Seguro",
            icon: "question",
            text: "No se podra recuperar a: " + first_name,
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                setId(id);
                deleteClient(id);
                setAux(true)
            } else {
                show_alerta("No se pudo eliminar");
            }
        });
    };

    if (aux) {
        handleModalClose()
        setAux(false)
    }

    return (
        <div>

            <Row>
                <Col xs="20" md="8" sm="8" className="col-title" >
                    <Card color="danger">
                        <CardTitle tag="h6" className=" p-2 mb-0">
                            <div className="title-pages">
                                LISTADO DE CLIENTES
                            </div>
                        </CardTitle>
                    </Card>
                </Col>
            </Row>

            <AgregarCliente />
            <ListaClientes handleModalClose={handleModalClose} handelDelete={handelDelete} clients={clients} />

        </div>
    );

}

export default ClientList;

