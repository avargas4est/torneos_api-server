import { Router } from "express";
import {methods as deportistaController} from "./../controllers/deportista.controller";

const router = Router();

router.post("/iald", deportistaController.insertar_archivo_listado_deportista);
router.put("/mald", deportistaController.modificar_archivo_listado_deportista);
router.delete("/eald", deportistaController.eliminar_archivo_listado_deportista);
router.get("/lald", deportistaController.listar_archivo_listado_deportista);

export default router; 