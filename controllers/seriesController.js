const Serie = require("../models/Serie");

exports.createSerie = async (req, res) => {
  try {
    const newSerie = await Serie.create(req.body);
    res.status(201).json(newSerie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la serie." });
  }
};

exports.getSeries = async (_, res) => {
  try {
    const series = await Serie.find();
    res.json(series);
  } catch (error) {
    res.status(404).json({ error: "Error al obtener las series." });
  }
};

exports.updateSerie = async (req, res) => {
  try {
    const updatedSerie = await Serie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedSerie);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la serie." });
  }
};

exports.deleteSerie = async (req, res) => {
  try {
    const deletedSerie = await Serie.findByIdAndDelete(req.params.id);
    res.json(deletedSerie);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la serie." });
  }
};
