import { Router } from "express";
import {methods as torneoController} from "./../controllers/torneo.controller";

const router = Router();

router.get("/", torneoController.l_torneo_activo);
router.get("/lt", torneoController.listar_torneos);
router.post("/it", torneoController.insertar_torneo);

router.put("/mt", torneoController.modificar_torneo);
router.delete("/et", torneoController.eliminar_torneo);

export default router; 