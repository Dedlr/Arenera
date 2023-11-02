import clientAxios from "../config/clientAxios";

//const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`,
  },
};

export function getSales() {
  return clientAxios
    .get("http://127.0.0.1:8000/sales/", config)
    .then((response) => response.data);
}

  export function getSale(id) {
    return clientAxios
      .get(`http://127.0.0.1:8000/sales/${id}/`, config)
  }

export function updateSale(id,sales) {
    return clientAxios
      .put(`http://127.0.0.1:8000/sales/${id}/`,sales, config)
  }

  export function deleteSale(id,sales) {
    return clientAxios
      .delete(`http://127.0.0.1:8000/sales/${id}/`,sales, config)
  }
