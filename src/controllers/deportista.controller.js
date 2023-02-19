
import { getConnection } from "./../database/database";

async function insertar_archivo_listado_deportista(req, res) {
    const {nombre_archivoListadoDeportista,ruta_archivoListadoDeportista,id_archivoListadoDeportista_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_archivo_listado_deportista`(?, ?, ?);",[nombre_archivoListadoDeportista,ruta_archivoListadoDeportista,id_archivoListadoDeportista_usuario]);
    res.send(result);
}


async function modificar_archivo_listado_deportista(req, res) {
    const {nombre_archivoListadoDeportista,ruta_archivoListadoDeportista,id_archivoListadoDeportista_usuario,id_archivoListadoDeportista} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_archivo_listado_deportista`(?, ?, ?, ?);",[nombre_archivoListadoDeportista,ruta_archivoListadoDeportista,id_archivoListadoDeportista_usuario,id_archivoListadoDeportista]);
    res.send(result);
}

async function eliminar_archivo_listado_deportista(req, res) {
    const {id_archivoListadoDeportista} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminar_archivo_listado_deportista`(?);",[id_archivoListadoDeportista]);
    res.send(result);
}

async function listar_archivo_listado_deportista(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_archivo_listado_deportista` ();",[]);
    res.send(result);
}

export const methods = {
    insertar_archivo_listado_deportista,
    modificar_archivo_listado_deportista,
    eliminar_archivo_listado_deportista,
    listar_archivo_listado_deportista
};