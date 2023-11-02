import React, { useEffect, useState } from 'react';
import { Label, Input, Button, Card, CardBody, CardTitle, CardText, CardGroup, Form, FormGroup } from "reactstrap";

// Simulamos las funciones para obtener clientes y productos
const getClients = async () => {
    // Simular una solicitud a la API
    const response = await fetch('api/clients');
    const data = await response.json();
    return data;
};

const getProducts = async () => {
    // Simular una solicitud a la API
    const response = await fetch('api/products');
    const data = await response.json();
    return data;
};

function AgregarVenta() {
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        client: '',
        sales: [],
        total: 0,
        isCancelled: false,
    });
    const [newProduct, setNewProduct] = useState({
        product: '',
        price: 0,
        quantity: 0,
    });

    useEffect(() => {
        // Cargar clientes y productos al cargar el componente
        getClients().then((data) => {
            setClients(data);
        });

        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddProduct = () => {
        const { product, price, quantity } = newProduct;
        const subtotal = price * quantity;

        const newSale = { product, price, quantity, subtotal };

        setFormData({
            ...formData,
            sales: [...formData.sales, newSale],
            total: formData.total + subtotal,
        });

        setNewProduct({
            product: '',
            price: 0,
            quantity: 0,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos al servidor o realizar las acciones necesarias con formData
        console.log(formData);
    };

    return (
        <div>
            <Card style={{ width: '400px' }} className="p-4">
                <CardTitle><h2>Registrar Venta</h2></CardTitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="date">Fecha:</Label>
                        <Input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleFormChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="client">Cliente:</Label>
                        <Input
                            type="select"
                            name="client"
                            value={formData.client}
                            onChange={handleFormChange}
                            required
                        >
                            <option value="">Seleccionar Cliente</option>
                            {clients.map((client) => (
                                <option key={client.id} value={client.id}>
                                    {client.name}
                                </option>
                            )}
                        </Input>
                    </FormGroup>

                    <h4>Detalle</h4>

                    {formData.sales.map((sale, index) => (
                        <div key={index}>
                            <FormGroup>
                                <Label for={`product${index}`}>Producto:</Label>
                                <Input
                                    type="select"
                                    name={`product${index}`}
                                    value={sale.product}
                                    onChange={handleFormChange}
                                >
                                    <option value="">Seleccionar Producto</option>
                                    {products.map((product) => (
                                        <option key={product.id} value={product.id}>
                                            {product.name}
                                        </option>
                                    )}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for={`price${index}`}>Precio:</Label>
                                <Input
                                    type="number"
                                    name={`price${index}`}
                                    value={sale.price}
                                    onChange={handleFormChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for={`quantity${index}`}>Cantidad:</Label>
                                <Input
                                    type="number"
                                    name={`quantity${index}`}
                                    value={sale.quantity}
                                    onChange={handleFormChange}
                                />
                            </FormGroup>
                        </div>
                    ))}

                    <Button
                        type="button"
                        color="primary"
                        onClick={handleAddProduct}
                    >
                        Agregar Producto
                    </Button>

                    <FormGroup>
                        <Label for="total">Total:</Label>
                        <Input
                            type="text"
                            name="total"
                            value={formData.total}
                            readOnly
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="isCancelled">¿Cancelada?</Label>
                        <Input
                            type="select"
                            name="isCancelled"
                            value={formData.isCancelled}
                            onChange={handleFormChange}
                        >
                            <option value={false}>No</option>
                            <option value={true}>Sí</option>
                        </Input>
                    </FormGroup>

                    <Button color="success">Registrar Venta</Button>
                </Form>
            </Card>
        </div>
    );
}

export default AgregarVenta;