const db = require('_helpers/db');
const Facility = db.Facility;

module.exports = {
    getAll,
};

async function getAll() {
    return await Facility.find();
}