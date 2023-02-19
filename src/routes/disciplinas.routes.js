import { Router } from "express";
import {methods as disciplinaController} from "./../controllers/disciplina.controller";

const router = Router();

router.get("/", disciplinaController.l_disciplinas_torneo);
router.put("/iap", disciplinaController.modificar_disciplina_id);
router.get("/lda", disciplinaController.listar_disciplinas_all);
router.get("/ldv", disciplinaController.listar_disciplinas_vs);

export default router; 