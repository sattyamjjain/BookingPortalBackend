const express = require('express');
const router = express.Router();
const facilityService = require('./facilities.service');

router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    facilityService.getAll()
        .then(facility => res.json(facility))
        .catch(err => next(err));
}