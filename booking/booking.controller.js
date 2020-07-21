const express = require('express');
const router = express.Router();
const bookingService = require('./booking.service');

router.post('/bookFacility', bookFacility);
router.post('/isAvailable', isAvailable);
router.get('/', getAll);

module.exports = router;

function bookFacility(req, res, next) {
    bookingService.bookFacility(req.body)
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function isAvailable(req, res, next) {
    bookingService.isAvailable(req.body)
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    bookingService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}