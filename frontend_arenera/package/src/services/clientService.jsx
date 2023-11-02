import clientAxios from "../config/clientAxios";

//const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`,
  },
};

export function getClients() {
  return clientAxios
    .get("http://127.0.0.1:8000/clients/", config)
    .then((response) => response.data);
}


export function getClient(id) {
    return clientAxios
      .get(`http://127.0.0.1:8000/clients/${id}/`, config)
  }

export function updateClient(id,clients) {
    return clientAxios
      .put(`http://127.0.0.1:8000/clients/${id}/`,clients, config)
  }

export function createClient(clients) {
    return clientAxios
      .post(`http://127.0.0.1:8000/clients/`,clients, config)
  }

  export function deleteClient(id,clients) {
    return clientAxios
      .delete(`http://127.0.0.1:8000/clients/${id}/`,clients, config)
  }

