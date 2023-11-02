import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

//Funcion exportable para mostrar alertas

export function show_alerta(mensaje, icono, foco='') {
  onfocus(foco);
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: mensaje,
    icono: icono,
  });
}

// Enciende el foco del input html
function onfocus(foco) {
  if (foco !== "") {
    document.getElementById(foco).focus();
  }
}
