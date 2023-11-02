import clientAxios from "../config/clientAxios";

//const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`,
  },
};

export function getProducts() {
  return clientAxios
    .get("http://127.0.0.1:8000/products/", config)
    .then((response) => response.data);
}

  export function getProduct(id) {
    return clientAxios
      .get(`http://127.0.0.1:8000/products/${id}/`, config)
  }

export function updateProduct(id,products) {
    return clientAxios
      .put(`http://127.0.0.1:8000/products/${id}/`,products, config)
  }

  export function deleteProduct(id,products) {
    return clientAxios
      .delete(`http://127.0.0.1:8000/products/${id}/`,products, config)
  }
