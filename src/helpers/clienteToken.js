import axios from "axios";

const obtenerToken = async (body) => {
  const data = axios
    .post("http://localhost:8024/API/v1.0/Seguridad/autorizaciones/jwt", body)
    .then((r) => r.data);
  console.log(data);
  return data
};

export const obtenerTokenFachada = async (body) => {
  
  return await obtenerToken(body);
};