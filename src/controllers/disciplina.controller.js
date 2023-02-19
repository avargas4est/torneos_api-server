
import { getConnection } from "./../database/database";

async function l_disciplinas_torneo(req, res) {
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_disciplinas_torneo`();");
    res.send(result);
}

async function modificar_disciplina_id(req, res) {
    const { id_disciplina } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `modificar_disciplina_id`(?);", [id_disciplina]);
    res.send(result);
}

async function listar_disciplinas_all(req, res) {
    const {  } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_disciplinas_all`();", []);
    res.send(result);
}

async function listar_disciplinas_vs(req, res) {
    const {  } = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_disciplinas_vs`();", []);
    res.send(result);
}




export const methods = {
    l_disciplinas_torneo,
    modificar_disciplina_id,
    listar_disciplinas_all,
    listar_disciplinas_vs

};