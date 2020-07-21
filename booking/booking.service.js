const db = require('_helpers/db');
const Booking = db.Booking;

module.exports = {
    bookFacility,
    isAvailable,
    getAll,
};

async function bookFacility(bookingParams) {
    const booking = new Booking(bookingParams);
    await booking.save();
    return booking;
}

async function isAvailable(bookingParams) {
    // validate
    if (await Booking.findOne({ 
        facilityName: bookingParams.facilityName,
        BookingDate: bookingParams.BookingDate,
        BookingTime: bookingParams.BookingTime})) {
        return true;
    }

    return false;
}

async function getAll() {
    return await Booking.find();
}