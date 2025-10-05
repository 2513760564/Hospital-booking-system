const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty.'],
    trim: true,
    maxlength: [50, 'The name cannot exceed 50 characters.']
  },
  specialization: {
    type: String,
    required: [true, 'The professional field cannot be empty.'],
    enum: ['Internal Medicine', 'Surgery', 'Pediatrics', 'Obstetrics and Gynecology', 'Ophthalmology', 'Dentistry', 'Dermatology', 'Traditional Chinese Medicine']
  },
  department: {
    type: String,
    required: [true, 'The department cannot be left blank.'],
    trim: true
  },
  experience: {
    type: Number,
    min: 0,
    default: 0
  },
  contact: {
    email: String,
    phone: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});


doctorSchema.index({ specialization: 1, department: 1 });

module.exports = mongoose.model('Doctor', doctorSchema);