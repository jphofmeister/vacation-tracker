const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  date: {
    type: Date,
    required: true
  }
});

module.exports = Day = mongoose.model('day', DaySchema);