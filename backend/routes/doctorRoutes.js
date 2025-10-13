const express = require('express');
const {
  getDoctors,
  getDoctorById,
  createDoctor
} = require('../controllers/doctorController');

const router = express.Router();

router.route('/')
  .get(getDoctors)
  .post(createDoctor);

router.route('/:id')
  .get(getDoctorById);

module.exports = router;