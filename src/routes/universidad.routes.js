import { Router } from "express";
import {methods as universidadController} from "./../controllers/universidad.controller";

const router = Router();

router.get("/lgu", universidadController.listar_grupos_universidad);
router.post("/fung", universidadController.filtrar_universidades_no_grupo);
router.post("/igu", universidadController.insertar_grupos_universidad);
router.put("/mgu", universidadController.modificar_grupos_universidad);
router.delete("/egu", universidadController.eliminar_grupos_universidad);
router.get("/lu", universidadController.listar_universidades);
router.post("/fapu", universidadController.filtrar_archivos_participantes_universidad);
router.get("/luld", universidadController.listar_universidades_listado_deportista);
router.post("/fu", universidadController.filtrar_universidades);  
router.post("/fucp", universidadController.filtrarUniversidadesCrearPartido);  

export default router; 