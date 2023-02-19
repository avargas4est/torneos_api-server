import { Router } from "express";
import {methods as etapaController} from "./../controllers/etapa.controller";

const router = Router();

router.post("/fge", etapaController.filtrar_ganadores_etapa);
router.post("/fpe", etapaController.filtrar_perdedores_etapa);


export default router; 