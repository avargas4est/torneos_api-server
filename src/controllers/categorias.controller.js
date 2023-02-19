
import { getConnection } from "./../database/database";

async function f_categoria_disciplinas(req, res) {
    const {id_disciplinas} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_categoria_disciplinas`(?);",[id_disciplinas]);
    res.send(result);
}


async function listar_grupos_categoria(req, res) {
    const {id_grupo_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_grupos_categoria`(?);",[id_grupo_categoria]);
    res.send(result);
}

async function modificar_grupos(req, res) {
    const {id_grupo,nombre_grupo,id_grupo_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `modificar_grupos`(?, ?, ?);",[id_grupo,nombre_grupo,id_grupo_categoria]);
    res.send(result);
}


async function eliminar_grupos(req, res) {
    const {id_grupo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("  CALL `eliminar_grupos`(?);",[id_grupo]);
    res.send(result);
}


async function crear_grupos(req, res) {
    const {nombre_grupo,id_grupo_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `crear_grupos`(?,?);",[nombre_grupo,id_grupo_categoria]);
    res.send(result);
}


async function buscar_grupo_nombre(req, res) {
    const {nombre_grupo} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `buscar_grupo_nombre`(?);",[nombre_grupo]);
    res.send(result);
}


async function insertar_categoria(req, res) {
    const {nombre_categoria,numeroParticipantes_categoria,id_categoria_disciplina,genero_categoria,id_categoria_torneo} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `insertar_categoria`(?,?,?,?,?);",[nombre_categoria,numeroParticipantes_categoria,id_categoria_disciplina,genero_categoria,id_categoria_torneo]);
    res.send(result);
}

// Correcion lista ? = 6
async function modificar_categoria(req, res) {
    const {id_categoria,nombre_categoria,numeroParticipantes_categoria,id_categoria_disciplina,genero_categoria,id_categoria_torneo} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_categoria`(?,?,?,?,?,?);",[id_categoria,nombre_categoria,numeroParticipantes_categoria,id_categoria_disciplina,genero_categoria,id_categoria_torneo]);
    res.send(result);
}



async function eliminar_categoria(req, res) {
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `eliminar_categoria`(?);",[id_categoria]);
    res.send(result);
}

async function insertar_puntaje_ganadores_categoria(req,res){
    const {id_puntajeGanadoresCategoria_categoria,puesto_puntajeGanadoresCategoria,puntaje_puntajeGanadoresCategoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `insertar_puntaje_ganadores_categoria`(?,?,?);",[id_puntajeGanadoresCategoria_categoria,puesto_puntajeGanadoresCategoria,puntaje_puntajeGanadoresCategoria]);
    res.send(result);
}

async function modificar_puntaje_ganadores_categoria(req,res){
    const {id_puntajeGanadoresCategoria,id_puntajeGanadoresCategoria_categoria,puesto_puntajeGanadoresCategoria,puntaje_puntajeGanadoresCategoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `modificar_puntaje_ganadores_categoria`(?,?,?,?);",[id_puntajeGanadoresCategoria,id_puntajeGanadoresCategoria_categoria,puesto_puntajeGanadoresCategoria,puntaje_puntajeGanadoresCategoria]);
    res.send(result);
}

async function eliminar_puntaje_ganadores_categoria(req,res){
    const {id_puntajeGanadoresCategoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `eliminar_puntaje_ganadores_categoria`(?);",[id_puntajeGanadoresCategoria]);
    res.send(result);
}

async function filtrar_etapas_no_categoria(req,res){
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `filtrar_etapas_no_categoria`(?);",[id_categoria]);
    res.send(result);
}

async function modificar_etapas_categoria(req,res){
    const {id_etapaCategoria,id_etapaCategoria_etapa,id_etapaCategoria_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `modificar_etapas_categoria`(?,?,?);",[id_etapaCategoria,id_etapaCategoria_etapa,id_etapaCategoria_categoria]);
    res.send(result);
}

async function eliminar_etapa_categoria(req,res){
    const {id_etapaCategoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `eliminar_etapa_categoria`(?);",[id_etapaCategoria]);
    res.send(result);
}

async function insertar_etapas_categoria(req,res){
    const {id_etapaCategoria_etapa,id_etapaCategoria_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `insertar_etapas_categoria`(?,?);",[id_etapaCategoria_etapa,id_etapaCategoria_categoria]);
    res.send(result);
}



async function listar_etapas_categorias(req,res){
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_etapas_categorias`(?);",[id_categoria]);
    res.send(result);
}

async function filtrar_grupos_categoria(req,res){
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `filtrar_grupos_categoria`(?);",[id_categoria]);
    res.send(result);
}

async function puntajesGanadoresCategorias_categoria_puesto(req,res){
    const {id_categoria,puesto} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `puntajesGanadoresCategorias_categoria_puesto`(?,?);",[id_categoria,puesto]);
    res.send(result);
}

async function ultima_categoria_creada(req,res){
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `ultima_categoria_creada`();",[]);
    res.send(result);
}

async function listar_etapas_no_categoria(req,res){
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_etapas_no_categoria`(?);",[id_categoria]);
    res.send(result);
}

async function insertar_categoria_all(req,res){
    const {nombre_categoria,numeroParticipantes_categoria,id_categoria_disciplina,genero_categoria,id_categoria_torneo,puesto1,puntaje1,puesto2,
        puntaje2,puesto3,puntaje3} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `insertar_categoria_all`(?,?,?,?,?,?,?,?,?,?,?);",[nombre_categoria,numeroParticipantes_categoria,id_categoria_disciplina,genero_categoria,id_categoria_torneo,puesto1,puntaje1,puesto2,
        puntaje2,puesto3,puntaje3]);
    res.send(result);
}


async function filtrar_etapas_idcategoria(req,res){
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `filtrar_etapas_idcategoria`(?);",[id_categoria]);
    res.send(result);
}



export const methods = {
    f_categoria_disciplinas,
    listar_grupos_categoria,
    modificar_grupos,
    eliminar_grupos,
    crear_grupos,
    buscar_grupo_nombre,
    insertar_categoria,
    modificar_categoria,
    eliminar_categoria,
    insertar_puntaje_ganadores_categoria,
    modificar_puntaje_ganadores_categoria,
    eliminar_puntaje_ganadores_categoria,
    filtrar_etapas_no_categoria,
    modificar_etapas_categoria,
    eliminar_etapa_categoria,
    insertar_etapas_categoria,
    listar_etapas_categorias,
    filtrar_grupos_categoria,
    puntajesGanadoresCategorias_categoria_puesto,
    ultima_categoria_creada,
    listar_etapas_no_categoria,
    insertar_categoria_all,
    filtrar_etapas_idcategoria

};