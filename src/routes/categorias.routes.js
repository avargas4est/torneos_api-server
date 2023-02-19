import { Router } from "express";
import {methods as categoriaController} from "./../controllers/categorias.controller";

const router = Router();

router.post("/", categoriaController.f_categoria_disciplinas);
router.post("/lgc", categoriaController.listar_grupos_categoria);
router.put("/mg", categoriaController.modificar_grupos);
router.delete("/eg", categoriaController.eliminar_grupos);
router.post("/cg", categoriaController.crear_grupos);
router.post("/bgn", categoriaController.buscar_grupo_nombre);
router.post("/ic", categoriaController.insertar_categoria);
router.put("/mc", categoriaController.modificar_categoria);
router.delete("/ec", categoriaController.eliminar_categoria);

// puntaje ganadores categoria
router.post("/ipgc", categoriaController.insertar_puntaje_ganadores_categoria);
router.put("/mpgc", categoriaController.modificar_puntaje_ganadores_categoria);
router.delete("/epgc", categoriaController.eliminar_puntaje_ganadores_categoria);

router.post("/fenc", categoriaController.filtrar_etapas_no_categoria);

// etapa categoria
router.put("/mec", categoriaController.modificar_etapas_categoria);
router.delete("/eec", categoriaController.eliminar_etapa_categoria);
router.post("/iec", categoriaController.insertar_etapas_categoria);

router.post("/lec", categoriaController.listar_etapas_categorias);
router.post("/fqc", categoriaController.filtrar_grupos_categoria);

router.post("/pgcp", categoriaController.puntajesGanadoresCategorias_categoria_puesto);
router.get("/ucc", categoriaController.ultima_categoria_creada);

router.post("/lenc", categoriaController.listar_etapas_no_categoria);


router.post("/ica", categoriaController.insertar_categoria_all);

router.post("/fei", categoriaController.filtrar_etapas_idcategoria);

export default router; 