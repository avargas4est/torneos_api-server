import logRoutes from "../routes/usr.routes";
import registroRoutes from "../routes/registro_usr.routes"
import torneoR from "../routes/torneo.routes";
import disciplinaR from "../routes/disciplinas.routes";
import categoriaR from "../routes/categorias.routes";
import partipantesR from "../routes/participantes.routes";
import deportistaR from "../routes/deportista.routes";
import partidosR from "../routes/partidos.routes";
import fileupload from "../routes/fileupload.routes"; 
import filedownload from "../routes/filedownload.routes";
import campalR from "../routes/campal.routes";
import universidadR from "../routes/universidad.routes";
import etapaR from "../routes/etapa.routes";

import error from "../middleware/error";
import test from "../middleware/error.test";

import express from "express";
import cors from "cors";

export default function (app) {
  //Midelwares
  app.use(cors());
  app.use(express.json());

  //Routes
  app.use("/api/usr", logRoutes);
  app.use("/api/usr_r", registroRoutes);
  app.use("/api/torneo", torneoR);
  app.use("/api/disciplina", disciplinaR);
  app.use("/api/categoria", categoriaR);
  app.use("/api/participantes", partipantesR);
  app.use("/api/deportista", deportistaR);
  app.use("/api/partidos", partidosR);
  app.use("/api/upload", fileupload);
  app.use("/download/:filename", filedownload);
  app.use("/api/campal", campalR);
  app.use("/api/universidad", universidadR);
  app.use("/api/etapa", etapaR);
  // Test
  app.use("/test", test);

  // Error middleware
  app.use(error);
}
