const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bookingNo: {type:String,required:true},
    facilityName: { type: String, required: true },
    BookingDate: { type: String, required: true },
    BookingTime: { type: String, required: true },
    bookedBy: { type: String, required: true }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Booking', schema);