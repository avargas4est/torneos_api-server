
import { getConnection } from "./../database/database";


async function listar_grupos_universidad(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_grupos_universidad`();");
    res.send(result);
}


async function filtrar_universidades_no_grupo(req, res) {
    const {id_grupo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_universidades_no_grupo`(?);",[id_grupo]);
    res.send(result);
}


async function insertar_grupos_universidad(req, res) {
    const {id_grupoUniversidad_grupo,id_grupoUniversidad_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_grupos_universidad`(?,?);",[id_grupoUniversidad_grupo,id_grupoUniversidad_usuario]);
    res.send(result);
}

async function modificar_grupos_universidad(req, res) {
    const {id_grupoUniversidad,id_grupoUniversidad_grupo,id_grupoUniversidad_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_grupos_universidad`(?,?,?);",[id_grupoUniversidad,id_grupoUniversidad_grupo,id_grupoUniversidad_usuario]);
    res.send(result);
}

async function eliminar_grupos_universidad(req, res) {
    const {id_grupoUniversidad} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminar_grupos_universidad`(?);",[id_grupoUniversidad]);
    res.send(result);
}

async function listar_universidades(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_universidades`();",[]);
    res.send(result);
}

async function filtrar_archivos_participantes_universidad(req, res) {
    const {id_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_archivos_participantes_universidad`(?);",[id_usuario]);
    res.send(result);
}


async function listar_universidades_listado_deportista(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_universidades_listado_deportista`();",[]);
    res.send(result);
}

async function filtrar_universidades(req, res) {
    const {id_grupo_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_universidades`(?);",[id_grupo_categoria]);
    res.send(result);
}

async function filtrarUniversidadesCrearPartido(req, res) {
    const {id_categoria,nombre_etapa_seleccionada,id_grupo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrarUniversidadesCrearPartido`(?,?,?);",[id_categoria,nombre_etapa_seleccionada,id_grupo]);
    res.send(result);
}



export const methods = {
    listar_grupos_universidad,
    filtrar_universidades_no_grupo,
    insertar_grupos_universidad,
    modificar_grupos_universidad,
    eliminar_grupos_universidad,
    listar_universidades,
    filtrar_archivos_participantes_universidad,
    listar_universidades_listado_deportista,
    filtrar_universidades,
    filtrarUniversidadesCrearPartido


};