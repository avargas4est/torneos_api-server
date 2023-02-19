
import { getConnection } from "./../database/database";


async function l_torneo_activo(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_torneos_activos`();");
    res.send(result);
}

async function listar_torneos(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_torneos`();");
    res.send(result);
}

async function insertar_torneo(req, res) {
    const {nombre_torneo,periodo_torneo,id_torneo_usuario,fechaLimiteIngreso_torneo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_torneo` (?,?,?,?);",[nombre_torneo,periodo_torneo,id_torneo_usuario,fechaLimiteIngreso_torneo]);
    res.send(result);
}

async function modificar_torneo(req, res) {
    const {id_torneo,nombre_torneo,periodo_torneo,id_torneo_usuario,fechaLimiteIngreso_torneo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_torneo`(?,?,?,?,?);",[id_torneo,nombre_torneo,periodo_torneo,id_torneo_usuario,fechaLimiteIngreso_torneo]);
    res.send(result);
}

async function eliminar_torneo(req, res) {
    const {id_torneo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminar_torneo`(?);",[id_torneo]);
    res.send(result);
}



export const methods = {
    l_torneo_activo,listar_torneos,insertar_torneo,
    modificar_torneo,
    eliminar_torneo

};