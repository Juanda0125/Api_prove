const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);