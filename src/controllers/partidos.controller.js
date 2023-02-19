
import { getConnection } from "./../database/database";


async function 	listar_partidos_categorias(req, res) {
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_categorias`(?);",[id_categoria]);
    res.send(result);
}


async function 	listar_partidos_campales_categorias(req, res) {
    const {id_categoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_campales_categorias`(?);",[id_categoria]);
    res.send(result);
}


async function 	listar_partidos_campal_ganadores(req, res) {
    const {id_partidoCampalGanadores} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_campal_ganadores` (?);",[id_partidoCampalGanadores]);
    res.send(result);
}


async function 	eliminar_partido_campal_ganadores(req, res) {
    const {id_partidoCampalGanadores} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminar_partido_campal_ganadores`(?);",[id_partidoCampalGanadores]);
    res.send(result);
}

async function 	buscar_puntaje_categoria_puesto(req, res) {
    const {id_puntajeGanadoresCategoria_categoria,puesto_puntajeGanadoresCategoria} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `buscar_puntaje_categoria_puesto`(?,?);",[id_puntajeGanadoresCategoria_categoria,puesto_puntajeGanadoresCategoria]);
    res.send(result);
}


async function 	listar_partidos_campales_por_disciplina(req, res) {
    const {id_disciplina} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_campales_por_disciplina`(?);",[id_disciplina]);
    res.send(result);
}

async function 	listar_partidos_por_disciplinas(req, res) {
    const {id_disciplina} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_por_disciplinas`(?);",[id_disciplina]);
    res.send(result);
}

async function crear_partido_vs(req, res) {
    const {id1_partido_usuario,id2_partido_usuario,id_partido_etapaCategoria,id_partido_grupo,fechaHoraInicio_partido,referencia_partido,direccion_partido,estado_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `crear_partido_vs`(?,?,?,?,?,?,?,?);",[id1_partido_usuario,id2_partido_usuario,id_partido_etapaCategoria,id_partido_grupo,fechaHoraInicio_partido,referencia_partido,direccion_partido,estado_partido]);
    res.send(result);
}

async function eliminar_partido_vs(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `eliminar_partido_vs`(?);",[id_partido]);
    res.send(result);
}

async function modificar_partido_vs(req, res) {
    const {id_partido,id1_partido_usuario,id2_partido_usuario,id_partido_etapaCategoria,id_partido_grupo,fechaHoraInicio_partido,referencia_partido,direccion_partido,estado_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_partido_vs`(?,?,?,?,?,?,?,?,?);",[id_partido,id1_partido_usuario,id2_partido_usuario,id_partido_etapaCategoria,id_partido_grupo,fechaHoraInicio_partido,referencia_partido,direccion_partido,estado_partido]);
    res.send(result);
}


async function 	listar_partidos_categorias_fecha(req, res) {
    const {id_categoria,fecha} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_categorias_fecha`(?,?);",[id_categoria,fecha]);
    res.send(result);
}

async function 	listar_partidos_por_disciplinas_fecha(req, res) {
    const {id_disciplina,fecha} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_por_disciplinas_fecha`(?,?);",[id_disciplina,fecha]);
    res.send(result);
}


async function 	listar_partidos_campales_categorias_fecha(req, res) {
    const {id_categoria,fecha} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_campales_categorias_fecha`(?,?);",[id_categoria,fecha]);
    res.send(result);
}

async function 	listar_partidos_campales_por_disciplina_fecha(req, res) {
    const {id_disciplina,fecha} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_partidos_campales_por_disciplina_fecha`(?,?);",[id_disciplina,fecha]);
    res.send(result);
}

async function 	listar_posiciones(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `listar_posiciones`();",[]);
    res.send(result);
}

async function 	insertar_partidos_futbol_informacion_validado(req, res) {
    const {id_partidoFutbolInformacion_partido,estado_partidoFutbolInformacion,idGanador_partidoFutbolInformacion_usuario,idPerdedor_partidoFutbolInformacion_usuario,golesEquipo1_partidoFutbolInformacion,golesEquipo2_partidoFutbolInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partidos_futbol_informacion_validado`(?,?,?,?,?,?);",[id_partidoFutbolInformacion_partido,estado_partidoFutbolInformacion,idGanador_partidoFutbolInformacion_usuario,idPerdedor_partidoFutbolInformacion_usuario,golesEquipo1_partidoFutbolInformacion,golesEquipo2_partidoFutbolInformacion]);
    res.send(result);
}


async function 	modificar_partidos_futbol_informacion_validado(req, res) {
    const {id_partidoFutbolInformacion,id_partidoFutbolInformacion_partido,estado_partidoFutbolInformacion,idGanador_partidoFutbolInformacion_usuario,idPerdedor_partidoFutbolInformacion_usuario,golesEquipo1_partidoFutbolInformacion,golesEquipo2_partidoFutbolInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_partidos_futbol_informacion_validado`(?,?,?,?,?,?,?);",[id_partidoFutbolInformacion,id_partidoFutbolInformacion_partido,estado_partidoFutbolInformacion,idGanador_partidoFutbolInformacion_usuario,idPerdedor_partidoFutbolInformacion_usuario,golesEquipo1_partidoFutbolInformacion,golesEquipo2_partidoFutbolInformacion]);
    res.send(result);
}


async function 	filtrar_partidos_futbol_informacion_id(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_partidos_futbol_informacion_id`(?);",[id_partido]);
    res.send(result);
}


async function 	insertar_partidos_basket_informacion_validado(req, res) {
    const {id_partidosBasketInformacion_partido,estado_partidosBasketInformacion,idGanador_partidosBasketInformacion_usuario,idPerdedor_partidosBasketInformacion_usuario,puntosEquipo1_partidosBasketInformacion,puntosEquipo2_partidosBasketInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partidos_basket_informacion_validado`(?,?,?,?,?,?);",[id_partidosBasketInformacion_partido,estado_partidosBasketInformacion,idGanador_partidosBasketInformacion_usuario,idPerdedor_partidosBasketInformacion_usuario,puntosEquipo1_partidosBasketInformacion,puntosEquipo2_partidosBasketInformacion]);
    res.send(result);
}


async function 	modificar_partidos_basket_informacion_validado(req, res) {
    const {id_partidosBasketInformacion,id_partidosBasketInformacion_partido,estado_partidosBasketInformacion,idGanador_partidosBasketInformacion_usuario,idPerdedor_partidosBasketInformacion_usuario,puntosEquipo1_partidosBasketInformacion,puntosEquipo2_partidosBasketInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_partidos_basket_informacion_validado`(?,?,?,?,?,?,?);",[id_partidosBasketInformacion,id_partidosBasketInformacion_partido,estado_partidosBasketInformacion,idGanador_partidosBasketInformacion_usuario,idPerdedor_partidosBasketInformacion_usuario,puntosEquipo1_partidosBasketInformacion,puntosEquipo2_partidosBasketInformacion]);
    res.send(result);
}


async function 	filtrar_partidos_basket_informacion_id(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_partidos_basket_informacion_id`(?);",[id_partido]);
    res.send(result);
}

async function 	insertar_partidos_tenis_informacion_validado(req, res) {
    const {id_partidosTenisInformacion_partido,estado_partidosTenisInformacion,idGanador_partidosTenisInformacion_usuario,idPerdedor_partidosTenisInformacion_usuario,puntosEquipo1_partidosTenisInformacion,puntosEquipo2_partidosTenisInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partidos_tenis_informacion_validado`(?,?,?,?,?,?);",[id_partidosTenisInformacion_partido,estado_partidosTenisInformacion,idGanador_partidosTenisInformacion_usuario,idPerdedor_partidosTenisInformacion_usuario,puntosEquipo1_partidosTenisInformacion,puntosEquipo2_partidosTenisInformacion]);
    res.send(result);
}

async function 	modificar_partidos_tenis_informacion_validado(req, res) {
    const {id_partidosTenisInformacion,id_partidosTenisInformacion_partido,estado_partidosTenisInformacion,idGanador_partidosTenisInformacion_usuario,idPerdedor_partidosTenisInformacion_usuario,puntosEquipo1_partidosTenisInformacion,puntosEquipo2_partidosTenisInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_partidos_tenis_informacion_validado`(?,?,?,?,?,?,?);",[id_partidosTenisInformacion,id_partidosTenisInformacion_partido,estado_partidosTenisInformacion,idGanador_partidosTenisInformacion_usuario,idPerdedor_partidosTenisInformacion_usuario,puntosEquipo1_partidosTenisInformacion,puntosEquipo2_partidosTenisInformacion]);
    res.send(result);
}

async function 	filtrar_partidos_tenis_informacion_id(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_partidos_tenis_informacion_id`(?);",[id_partido]);
    res.send(result);
}

async function 	insertar_partidos_ecuavolly_informacion_validado(req, res) {
    const {id_partidosEcuavollyInformacion_partido,estado_partidosEcuavollyInformacion,idGanador_partidosEcuavollyInformacion_usuario,idPerdedor_partidosEcuavollyInformacion_usuario,puntosEquipo1_partidosEcuavollyInformacion,puntosEquipo2_partidosEcuavollyInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partidos_ecuavolly_informacion_validado`(?,?,?,?,?,?);",[id_partidosEcuavollyInformacion_partido,estado_partidosEcuavollyInformacion,idGanador_partidosEcuavollyInformacion_usuario,idPerdedor_partidosEcuavollyInformacion_usuario,puntosEquipo1_partidosEcuavollyInformacion,puntosEquipo2_partidosEcuavollyInformacion]);
    res.send(result);
}

async function 	modificar_partidos_ecuavolly_informacion_validado(req, res) {
    const {id_partidosEcuavollyInformacion,id_partidosEcuavollyInformacion_partido,estado_partidosEcuavollyInformacion,idGanador_partidosEcuavollyInformacion_usuario,idPerdedor_partidosEcuavollyInformacion_usuario,puntosEquipo1_partidosEcuavollyInformacion,puntosEquipo2_partidosEcuavollyInformacion} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_partidos_ecuavolly_informacion_validado`(?,?,?,?,?,?,?);",[id_partidosEcuavollyInformacion,id_partidosEcuavollyInformacion_partido,estado_partidosEcuavollyInformacion,idGanador_partidosEcuavollyInformacion_usuario,idPerdedor_partidosEcuavollyInformacion_usuario,puntosEquipo1_partidosEcuavollyInformacion,puntosEquipo2_partidosEcuavollyInformacion]);
    res.send(result);
}

async function 	filtrar_partidos_ecuavolly_informacion_id(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_partidos_ecuavolly_informacion_id`(?);",[id_partido]);
    res.send(result);
}

async function 	insertar_partidos_juego_mesa_informacion_validado(req, res) {
    const {id_partidoJuegodeMesaInformacion_partido,estado_partidoJuegodeMesaInformacion,idGanador_partidoJuegodeMesaInformacion_usuario,idPerdedor_partidoJuegodeMesaInformacion_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `insertar_partidos_juego_mesa_informacion_validado`(?,?,?,?);",[id_partidoJuegodeMesaInformacion_partido,estado_partidoJuegodeMesaInformacion,idGanador_partidoJuegodeMesaInformacion_usuario,idPerdedor_partidoJuegodeMesaInformacion_usuario]);
    res.send(result);
}

async function 	modificar_partidos_juego_mesa_informacion_validado(req, res) {
    const {id_partidoJuegodeMesaInformacion,id_partidoJuegodeMesaInformacion_partido,estado_partidoJuegodeMesaInformacion,idGanador_partidoJuegodeMesaInformacion_usuario,idPerdedor_partidoJuegodeMesaInformacion_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `modificar_partidos_juego_mesa_informacion_validado`(?,?,?,?,?);",[id_partidoJuegodeMesaInformacion,id_partidoJuegodeMesaInformacion_partido,estado_partidoJuegodeMesaInformacion,idGanador_partidoJuegodeMesaInformacion_usuario,idPerdedor_partidoJuegodeMesaInformacion_usuario]);
    res.send(result);
}

async function 	filtrar_partidos_juego_mesa_informacion_id(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_partidos_juego_mesa_informacion_id`(?);",[id_partido]);
    res.send(result);
}

async function 	filtrar_usuarios_idpartido(req, res) {
    const {id_partido} = req.body;
    const connection = await getConnection();
    const result = await connection.query("CALL `filtrar_usuarios_idpartido`(?);",[id_partido]);
    res.send(result);
}


export const methods = {
    listar_partidos_categorias,
    listar_partidos_campales_categorias,
    listar_partidos_campal_ganadores,
    eliminar_partido_campal_ganadores,
    buscar_puntaje_categoria_puesto,
    listar_partidos_campales_por_disciplina,
    listar_partidos_por_disciplinas,
    crear_partido_vs,
    eliminar_partido_vs,
    modificar_partido_vs,
    listar_partidos_categorias_fecha,
    listar_partidos_por_disciplinas_fecha,
    listar_partidos_campales_categorias_fecha,
    listar_partidos_campales_por_disciplina_fecha,
    listar_posiciones,
    insertar_partidos_futbol_informacion_validado,
    modificar_partidos_futbol_informacion_validado,
    filtrar_partidos_futbol_informacion_id,
    insertar_partidos_basket_informacion_validado,
    modificar_partidos_basket_informacion_validado,
    filtrar_partidos_basket_informacion_id,
    insertar_partidos_tenis_informacion_validado,
    modificar_partidos_tenis_informacion_validado,
    filtrar_partidos_tenis_informacion_id,
    insertar_partidos_ecuavolly_informacion_validado,
    modificar_partidos_ecuavolly_informacion_validado,
    filtrar_partidos_ecuavolly_informacion_id,
    insertar_partidos_juego_mesa_informacion_validado,
    modificar_partidos_juego_mesa_informacion_validado,
    filtrar_partidos_juego_mesa_informacion_id,
    filtrar_usuarios_idpartido


    

};