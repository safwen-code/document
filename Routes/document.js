const express= require("express")
const router =express.Router()

const document = require('../models/documents')
router.get("/", (req, res) => {
    document.find()
      .then(documents => res.json(documents))
      .catch(err => res.send("cannot get"));
  });
  router.post("/", (req, res) => {
    const newdocument = new document({
      titel: req.body.titel,
      description: req.body.description,
      rates: req.body.rates,
      image:req.body.image,
    });
  
    newdocument
      .save()
      .then(documents => res.json(documents))
      .catch(err => res.send("cannot post"));
  });
  
  router.delete("/:id", (req, res) => {
    document.findOneAndDelete(req.params.id)
      .then(data => res.send({ success: true }))
      .catch(err => res.send({ success: false }));
  });
  
  router.put("/:id", (req, res) => {
    const documentlist = req.body;
    document.findOneAndUpdate({ _id: req.params.id }, { $set: { ...documentlist } })
      .then(data => res.send({ success: true }))
      .catch(err => res.send({ success: false }));
  });





module.exports=router