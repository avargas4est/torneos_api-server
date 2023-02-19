import { getConnection } from "./../database/database";

async function listar_participantes_partido_campal(req, res) {
    const {id_partidoCampal} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_participantes_partido_campal`(?);", [id_partidoCampal]);
    res.send(result);
}

async function insertar_partido_campal_ganador(req, res) {
    const {id_partidoCampalGanadores_partidoCampal,id_partidoCampalGanadores_participante,puesto_partidoCampalGanadores} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partido_campal_ganador`(?,?,?);",[id_partidoCampalGanadores_partidoCampal,id_partidoCampalGanadores_participante,puesto_partidoCampalGanadores]);
    res.send(result);
}


async function insertar_partidoscampal(req, res) {
    const {id_partidoCampal_categoria,fechaHoraInicio_partidoCampal,referencia_partidoCampal,direccion_partidoCampal,estado_partidoCampal} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partidoscampal`(?,?,?,?,?);",[id_partidoCampal_categoria,fechaHoraInicio_partidoCampal,referencia_partidoCampal,direccion_partidoCampal,estado_partidoCampal]);
    res.send(result);
}

async function modificarPartidoscampal(req, res) {
    const {id_partidoCampal,id_partidoCampal_categoria,fechaHoraInicio_partidoCampal,referencia_partidoCampal,direccion_partidoCampal,estado_partidoCampal} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificarPartidoscampal`(?,?,?,?,?,?);",[id_partidoCampal,id_partidoCampal_categoria,fechaHoraInicio_partidoCampal,referencia_partidoCampal,direccion_partidoCampal,estado_partidoCampal]);
    res.send(result);
}

async function eliminarPartidoscampal(req, res) {
    const {id_partidoCampal} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminarPartidoscampal`(?);",[id_partidoCampal]);
    res.send(result);
}

async function cambiar_estado_campal_pendiente(req, res) {
    const {id_partidoCampal} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `cambiar_estado_campal_pendiente`(?);",[id_partidoCampal]);
    res.send(result);
}

async function cambiar_estado_campal_terminado(req, res) {
    const {id_partidoCampal} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `cambiar_estado_campal_terminado`(?);",[id_partidoCampal]);
    res.send(result);
}


export const methods = {
    listar_participantes_partido_campal,
    insertar_partido_campal_ganador,
    insertar_partidoscampal,
    modificarPartidoscampal,
    eliminarPartidoscampal,
    cambiar_estado_campal_pendiente,
    cambiar_estado_campal_terminado

};
