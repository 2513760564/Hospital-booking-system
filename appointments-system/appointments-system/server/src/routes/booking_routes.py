# src/routes/booking_routes.py
from flask import Blueprint, jsonify, request
from src.controllers.booking_controller import BookingController

booking_bp = Blueprint('booking', __name__)

# 获取所有预约
@booking_bp.route('/appointments', methods=['GET'])
def get_appointments():
    return BookingController.get_appointments()

# 创建新预约
@booking_bp.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    return BookingController.create_appointment(data)

# 根据预约ID获取单个预约
@booking_bp.route('/appointments/<int:appointment_id>', methods=['GET'])
def get_appointment(appointment_id):
    appointment = BookingController.get_appointment(appointment_id)
    if appointment:
        return jsonify(appointment), 200
    else:
        return jsonify({'error': 'Appointment not found'}), 404
