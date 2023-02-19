const fs = require("fs");

function deleteFile(req, res) {
  const filename = req.params.filename;
  const path = "uploads/" + filename;
  console.log(filename);
  fs.unlink(path, (err) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Error al eliminar el archivo",
      });
    }
    return res.send({
      success: true,
      message: "Archivo eliminado exitosamente",
    });
  });
}

export default {
  deleteFile,
};
