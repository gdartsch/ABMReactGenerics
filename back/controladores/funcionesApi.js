const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Instrumento } = require('../db');

const findAllInstruments = async (req, res) => {
    const instrumentos = await Instrumento.findAll();
    return res.json(instrumentos);
}

const findInstrumentbyId = async (req, res) => {
    const instrumento = await Instrumento.findByPk(req.params.id);
    return res.json(instrumento);
}

const findInstrumentByName = async (req, res) => {
    const instrumento = await Instrumento.findAll({
        where: {
            nombre: {
                [Op.like]: `%${req.params.nombre}%`
            }
        }
    });
    return res.json(instrumento);
}

const updateInstrument = async (req, res) => {
    const instrumento = await Instrumento.create(req.body);
    return res.json(instrumento);
}

const saveInstrument = async (req, res) => {
    await Instrumento.update(req.body, {
        where: { id: req.params.id }
        });
    return res.json({success: 'Instrumento actualizado'});
}

const deleteInstrument = async (req, res) => {
    await Instrumento.destroy({
        where: { id: req.params.id }
        });
    return res.json({success: 'Instrumento eliminado'});
}

module.exports = {
    findAllInstruments,
    findInstrumentbyId,
    findInstrumentByName,
    updateInstrument,
    saveInstrument,
    deleteInstrument
}