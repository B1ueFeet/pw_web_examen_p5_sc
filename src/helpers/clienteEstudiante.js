import axios from "axios"
const consultarEstudiante = async ()=> {
    // AXIOS TIENE INCLUIDO IMPLICITAMENTE AWAIT (NO HACE FALTA DECLARARLO)
    const data = axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/`).then(r => r.data)
    console.log(data)
    return data
}

export const consultarEstudianteFacade = async ()=> {
    return await consultarEstudiante();
}


const insertar = async (body) => {
    const data = axios.post("http://localhost:8081/API/v1.0/Matricula/estudiantes",body).then(r=>r.data)
    console.log(data)
}

export const insertarFacade = async(body) => {
    return await insertar(body);
}
