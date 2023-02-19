import { getConnection } from "./../database/database";

require('dotenv').config;
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");


async function login(req, res) {
    const { username, password } = req.body;
    const connection = await getConnection();

    console.log(username, password);
    const result = await connection.query("CALL filtrar_usuario(?);", username);

    if (result[0].length === 0)
        return res.send({token:"Invalid username or password"});


    const account = result[0][0];

    const isValid = await bcrypt.compare(password, account.password_usuario);

    if (!isValid) return res.send({token:"Invalid username or password"});


    const token = jwt.sign(
        _.omit(account, "password_usuario"),
        process.env.JWTPRIVATEKEY
    );

    res.send({token:token});
}


async function obtener_usuario_id(req, res) {
    const {id_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `obtener_usuario_id`(? );",[id_usuario]);
    res.send(result);
}

async function modificar_usuario(req, res) {
    const {id_usuario,cedula_usuario,nombre_usuario,usuario_usuario,password_usuario,correo_usuario,id_usuario_rol,ciudad_usuario,estado_usuario} = req.body;
    const connection = await getConnection();
    const sal = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password_usuario, sal);
    const result = await connection.query(" CALL `modificar_usuario`(?,?,?,?,?,?,?,?,?);",[id_usuario,cedula_usuario,nombre_usuario,usuario_usuario,hash,correo_usuario,id_usuario_rol,ciudad_usuario,estado_usuario]);
    res.send(result);
}
async function eliminar_usuario(req, res) {
    const {id_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `eliminar_usuario`(? );",[id_usuario]);
    res.send(result);
}

async function listar_usuarios(req, res) {
    const {} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `listar_usuarios`();",[]);
    res.send(result);
}

async function buscar_usuario_cedula(req, res) {
    const {cedula_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `buscar_usuario_cedula`(?);",[cedula_usuario]);
    res.send(result);
}

async function buscar_usuario_nombre(req, res) {
    const {nombre_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `buscar_usuario_nombre`(?);",[nombre_usuario]);
    res.send(result);
}


async function insertar_usuarios(req, res) {
    const {cedula_usuario,nombre_usuario,usuario_usuario,password_usuario,correo_usuario,id_usuario_rol,ciudad_usuario,estado_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `insertar_usuarios`(?,?,?,?,?,?,?,?);",[cedula_usuario,nombre_usuario,usuario_usuario,password_usuario,correo_usuario,id_usuario_rol,ciudad_usuario,estado_usuario]);
    res.send(result);
}


async function modificar_usuario_sin_contrasena(req, res) {
    const {id_usuario,cedula_usuario,nombre_usuario,usuario_usuario,correo_usuario,id_usuario_rol,ciudad_usuario,estado_usuario} = req.body;
    const connection = await getConnection();
    const result = await connection.query(" CALL `modificar_usuario_sin_contrasena`(?,?,?,?,?,?,?,?);",[id_usuario,cedula_usuario,nombre_usuario,usuario_usuario,correo_usuario,id_usuario_rol,ciudad_usuario,estado_usuario]);
    res.send(result);
}

export const methods = {
    login,
    obtener_usuario_id,
    modificar_usuario,
    eliminar_usuario,
    listar_usuarios,
    buscar_usuario_cedula,
    buscar_usuario_nombre,
    insertar_usuarios,
    modificar_usuario_sin_contrasena
    
};