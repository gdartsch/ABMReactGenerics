const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { findAllInstruments, 
        findInstrumentbyId, 
        findInstrumentByName,
        updateInstrument, 
        saveInstrument, 
        deleteInstrument } = 
            require('../../controladores/funcionesApi');

const { Instrumento } = require('../../db');

router.get('/', findAllInstruments);

router.get('/:id', findInstrumentbyId);

router.get('/busqueda/:nombre', findInstrumentByName);

router.post('/', updateInstrument);

router.put('/:id', saveInstrument);

router.delete('/:id', deleteInstrument);

module.exports = router;