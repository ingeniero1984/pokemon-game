import Swal from "sweetalert2";

/**
 * Variable de Configuración del modal
 */
const swalOptions = {
  allowOutsideClick: false,
  allowEscapeKey: false,
  confirmButtonText: "ACEPTAR",
  cancelButtonText: "CERRAR",
  confirmButtonColor: "#A3053D",
  cancelButtonColor: "#D7D7D7"
};

/**
 * Modal de respuesta errónea
 *
 * @param {string} html
 * @return {*} Modal
 */
function showSwalError(html) {
  return Swal.fire({
    title: "¡Error!",
    html,
    icon: "error",
    ...swalOptions
  });
}

/**
 * Modal de respuesta exitosa
 *
 * @param {string} html
 * @return {*} Modal
 */
function showSwalSuccess(html) {
  return Swal.fire({
    title: "¡Perfecto!",
    html,
    icon: "success",
    ...swalOptions
  });
}

export {
  showSwalError,
  showSwalSuccess
};
