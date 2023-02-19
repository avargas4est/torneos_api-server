import { Router } from "express";
import {methods as campalController} from "./../controllers/campal.controller";

const router = Router();

router.post("/lppc", campalController.listar_participantes_partido_campal);
router.post("/ipcg", campalController.insertar_partido_campal_ganador);
router.post("/ipc", campalController.insertar_partidoscampal);
router.put("/mpc", campalController.modificarPartidoscampal);
router.delete("/epc", campalController.eliminarPartidoscampal);
router.post("/cecp", campalController.cambiar_estado_campal_pendiente);
router.post("/cect", campalController.cambiar_estado_campal_terminado);
export default router; 