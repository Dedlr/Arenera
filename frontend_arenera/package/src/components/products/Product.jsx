import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardText, CardImg, CardGroup } from "reactstrap";
import "../../assets/css/product.css";
import VentanaModal from './ModalProduct';
import producto1 from "../../assets/images/productos/producto1.JPEG";
import producto2 from "../../assets/images/productos/producto2.JPEG";
import producto3 from "../../assets/images/productos/producto3.JPEG";
import producto4 from "../../assets/images/productos/producto4.JPEG";
import producto5 from "../../assets/images/productos/producto5.JPEG";
import producto6 from "../../assets/images/productos/producto6.JPEG";
import producto7 from "../../assets/images/productos/producto7.JPEG";


import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";

const productImages = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];

const ProductsList = () => {
  const [id, setId] = useState("")
  const [products, setProducts] = useState([]);


  useEffect(() => {
    let isMounted = true;
    getProducts().then((data) => {
      if (isMounted) {
        setProducts(data.rows);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);


  const handleModalClose = () => {
    // Actualiza los datos, por ejemplo, volviendo a obtener los clientes
    getProducts().then((data) => {
        console.log(data)
        setProducts(data.rows);
    });
};


  const handelUpdate = (e, product) => {
    e.preventDefault();
    setId(product)
}



  return (
    <div>

      <Row>
        <Col xs="12" md="12" sm="12">
          <Card color="danger">
            <CardTitle tag="h6" className=" p-2 mb-0">
              <div className="title-pages">
                MATERIALES
              </div>
            </CardTitle>
          </Card>

          <Row>

            {products.map((product) =>
              <Col md="6" lg="3" >
                <Card body className='micolor-personalizado' key={product.id}>
                  <CardTitle className='cardtitle-prop'>{product.description}</CardTitle>
                  <CardImg alt="Card image cap" src={productImages[product.id - 1]} top width="100%" />
                  <div><br></br>
                    <center>
                      <Button className="btn" color="danger" size="lg" >
                        Q {product.price}.00
                      </Button>
                    </center><br></br>
                    <center>
                    <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                        type="button"
                        onClick={event => handelUpdate(event, product.id)}
                    >
                        <i className="fa-solid fa-edit"></i>
                    </button>
                    </center>
                  </div>
                </Card>
              </Col>
            )
            }

          </Row>
        </Col>
      </Row>

      < VentanaModal setId={setId}
                id={id}
                setProducts={setProducts}
                handleModalClose={handleModalClose}
            />

    </div>
  );

}

export default ProductsList;

