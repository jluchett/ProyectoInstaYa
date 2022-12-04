const express = require("express");
const router = express.Router();
const Envio = require("../models/envio");

router.get("/", async (req, res) => {
  const datos = await Envio.find();
  console.log(datos);
  res.json(datos);
});

router.post("/", async (req, res) => {
  const {
    fecha_crea,hora_crea,nom_destinatario,ced_destinatario,dir_entrega,
    ciudad_entrega,estado,largo,ancho,alto,peso,dir_recogida,ciudad_recogida,id_cliente
  } = req.body;
  const envio = new Envio({
    fecha_crea,hora_crea,nom_destinatario,ced_destinatario,dir_entrega,
    ciudad_entrega,estado,largo,ancho,alto,peso,dir_recogida,ciudad_recogida,id_cliente
  });
  await envio.save();
  console.log(envio);
  res.json('Envio guardado');
});

router.put("/:id", async (req, res) => {
    const {
      fecha_crea,hora_crea,nom_destinatario,ced_destinatario,dir_entrega,
      ciudad_entrega,estado,largo,ancho,alto,peso,dir_recogida,ciudad_recogida,id_cliente
    } = req.body;
    const newEnvio = {
      fecha_crea,hora_crea,nom_destinatario,ced_destinatario,dir_entrega,
      ciudad_entrega,estado,largo,ancho,alto,peso,dir_recogida,ciudad_recogida,id_cliente
    }
    await Envio.findByIdAndUpdate(req.params.id, newEnvio)
    res.json({status:'Envio actualizado'});
});

router.delete("/:id", async (req, res) => {
    await Envio.findByIdAndRemove(req.params.id)
    res.json({status:'Envio eliminado'})
});

router.get("/:id", async (req, res) => {
    const envio = await Envio.findById(req.params.id)
    res.json(envio)
});

module.exports = router;
