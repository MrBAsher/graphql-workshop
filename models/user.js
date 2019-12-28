const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    index: true,
    unique: true,
  },
  email: String,
});

module.exports = mongoose.model('User', userSchema);
