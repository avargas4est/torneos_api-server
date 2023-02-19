import { Router } from "express";
import {methods as usrController} from "./../controllers/usr.controller";

const router = Router();

router.post("/", usrController.login);
router.post("/oui", usrController.obtener_usuario_id);
router.put("/mu", usrController.modificar_usuario);
router.delete("/eu", usrController.eliminar_usuario);
router.get("/lu", usrController.listar_usuarios);
router.post("/buc", usrController.buscar_usuario_cedula);
router.post("/bun", usrController.buscar_usuario_nombre);
router.post("/iu", usrController.insertar_usuarios);
router.put("/musc", usrController.modificar_usuario_sin_contrasena);
export default router; 