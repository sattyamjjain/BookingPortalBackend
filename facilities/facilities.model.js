const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    facilityName: { type: String, unique: true, required: true },
    facilityDescription: { type: String, required: true },
    Rules: { type: String, required: true },
    Other: { type: String, required: true },
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Facility', schema);