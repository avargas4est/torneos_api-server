// const path = require("path");

function getFile(req, res) {
  //   const dir = path.dirname(__dirname);
  //   const file = dir + `./uploads/${req.params.filename}`;
  const file = `./uploads/${req.params.filename}`;
  console.log(file);
  res.download(file);
}

function uploadFile(req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
}

export default {
  getFile,
  uploadFile,
};
