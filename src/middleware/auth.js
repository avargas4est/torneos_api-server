import { verify } from "jsonwebtoken";

function isAuthenticated(req, res, next) {
  const token = req.header("x-authorization");

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = verify(token, process.env.JWTPRIVATEKEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
}

function isAuthorized(...roles) {
  return function (req, res, next) {
    const allowed = [...roles];
    const { id_usuario_rol } = req.usuario;

    console.log(id_usuario_rol);
    console.log(allowed);

    if (!allowed.includes(id_usuario_rol))
      return res.status(403).send("Access denied.");

    next();
  };
}

export default {
  isAuthenticated,
  isAuthorized,
};
