const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');
const Doctor = require('../../models/Doctor');

describe('Doctor API integration test', () => {
  beforeAll(async () => {
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Doctor.deleteMany({});
  });

  describe('GET /api/doctors', () => {
    it('The array should be returned as empty when there is no doctor.', async () => {
      const res = await request(app)
        .get('/api/doctors')
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toEqual([]);
    });

    it('should return the list of doctors', async () => {
      // Creat testing data
      await Doctor.create({
        name: 'Doctor Zhang',
        specialization: 'Internal Medicine Department',
        department: 'Medical Clinic'
      });

      const res = await request(app)
        .get('/api/doctors')
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data[0].name).toBe('Doctor Zhang');
    });
  });

  describe('POST /api/doctors', () => {
    it('should successfully creat new doctor', async () => {
      const doctorData = {
        name: 'Doctor Wang',
        specialization: 'Pediatric Department',
        department: 'Pediatric Outpatient Department',
        experience: 10
      };

      const res = await request(app)
        .post('/api/doctors')
        .send(doctorData)
        .expect(201);

      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('Doctor Wang');
    });
  });
});