import { getConnection } from "./../database/database";

async function filtrar_ganadores_etapa(req, res) {
    const { id_etapa_var } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_ganadores_etapa`(?);",[id_etapa_var]);
    res.send(result);
}

async function filtrar_perdedores_etapa(req, res) {
    const { id_etapa_var } = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_perdedores_etapa`(?);",[id_etapa_var]);
    res.send(result);
}

export const methods = {
    filtrar_ganadores_etapa,
    filtrar_perdedores_etapa
};