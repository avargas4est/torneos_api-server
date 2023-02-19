import { Router } from "express";
import {methods as partidoController} from "./../controllers/partidos.controller";

const router = Router();

router.post("/lpc", partidoController.listar_partidos_categorias);
router.post("/lpcc", partidoController.listar_partidos_campales_categorias);
router.post("/lpcg", partidoController.listar_partidos_campal_ganadores);
router.post("/epcg", partidoController.eliminar_partido_campal_ganadores);
router.post("/bpcp", partidoController.buscar_puntaje_categoria_puesto);
router.post("/lpcpd", partidoController.listar_partidos_campales_por_disciplina);
router.post("/lppd", partidoController.listar_partidos_por_disciplinas);

// partido vs
router.post("/cpv", partidoController.crear_partido_vs);
router.put("/mpv", partidoController.modificar_partido_vs);
router.delete("/epv", partidoController.eliminar_partido_vs);


router.post("/lpcf", partidoController.listar_partidos_categorias_fecha);
router.post("/lppdf", partidoController.listar_partidos_por_disciplinas_fecha);
router.post("/lpccf", partidoController.listar_partidos_campales_categorias_fecha);
router.post("/lpcpdf", partidoController.listar_partidos_campales_por_disciplina_fecha);
router.get("/lp", partidoController.listar_posiciones);
router.post("/ipfiv", partidoController.insertar_partidos_futbol_informacion_validado);
router.put("/mpfiv", partidoController.modificar_partidos_futbol_informacion_validado);
router.post("/fpfii", partidoController.filtrar_partidos_futbol_informacion_id);

router.post("/ipbiv", partidoController.insertar_partidos_basket_informacion_validado);
router.put("/mpbiv", partidoController.modificar_partidos_basket_informacion_validado);
router.post("/fpbii", partidoController.filtrar_partidos_basket_informacion_id);
router.post("/iptiv", partidoController.insertar_partidos_tenis_informacion_validado);
router.put("/mptiv", partidoController.modificar_partidos_tenis_informacion_validado);
router.post("/fptiv", partidoController.filtrar_partidos_tenis_informacion_id);


router.post("/ipeiv", partidoController.insertar_partidos_ecuavolly_informacion_validado);
router.put("/mpeiv", partidoController.modificar_partidos_ecuavolly_informacion_validado);
router.post("/fpeii", partidoController.filtrar_partidos_ecuavolly_informacion_id);
router.post("/ipjmiv", partidoController.insertar_partidos_juego_mesa_informacion_validado);
router.put("/mpjmiv", partidoController.modificar_partidos_juego_mesa_informacion_validado);
router.post("/fpjmii", partidoController.filtrar_partidos_juego_mesa_informacion_id);
router.post("/fui", partidoController.filtrar_usuarios_idpartido);

export default router; 