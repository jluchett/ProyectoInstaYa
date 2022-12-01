const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario");

router.get("/", async (req, res) => {
  const datos = await Usuario.find();
  console.log(datos);
  res.json(datos);
});

router.post("/", async (req, res) => {
  const {
    nombre,apellido,nombreusuario,email,contrasena
  } = req.body;
  const usuario = new Usuario({
    nombre,apellido,nombreusuario,email,contrasena
  });
  await usuario.save();
  console.log(usuario);
  res.json('Usuario guardado');
});

router.put("/:id", async (req, res) => {
    const {
        nombre,apellido,nombreusuario,email,contrasena
    } = req.body;
    const newUsuario = {
        nombre,apellido,nombreusuario,email,contrasena
    }
    await Usuario.findByIdAndUpdate(req.params.id, newUsuario)
    res.json({status:'Usuario actualizado'});
});

router.delete("/:id", async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({status:'Usuario eliminado'})
});

router.get("/:id", async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
});

module.exports = router;