const Doctor = require('../models/Doctor');
const asyncHandler = require('express-async-handler');

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
const getDoctors = asyncHandler(async (req, res) => {
  const { specialization, department, page = 1, limit = 10 } = req.query;
  
  // check
  const query = { isActive: true };
  if (specialization) query.specialization = specialization;
  if (department) query.department = new RegExp(department, 'i');

  const doctors = await Doctor.find(query)
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const total = await Doctor.countDocuments(query);

  res.json({
    success: true,
    count: doctors.length,
    total,
    pagination: {
      page: Number(page),
      pages: Math.ceil(total / limit)
    },
    data: doctors
  });
});

// @desc    According to ID to get details about doctors
// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: 'The specified doctor was not found.'
    });
  }

  res.json({
    success: true,
    data: doctor
  });
});

// @desc    Creat new doctors
// @route   POST /api/doctors
// @access  Private/Admin
const createDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.create(req.body);

  res.status(201).json({
    success: true,
    message: 'Doctor successfully completed the creation.',
    data: doctor
  });
});

module.exports = {
  getDoctors,
  getDoctorById,
  createDoctor
};