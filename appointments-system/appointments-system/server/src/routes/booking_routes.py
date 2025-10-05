from flask import Blueprint
from src.controllers.booking_controller import BookingController

booking_bp = Blueprint('booking', __name__)

@booking_bp.route('/appointments', methods=['GET'])
def get_appointments():
    return BookingController.get_appointments()

@booking_bp.route('/appointments', methods=['POST'])
def create_appointment():
    return BookingController.create_appointment()

@booking_bp.route('/appointments/<int:appointment_id>', methods=['GET'])
def get_appointment(appointment_id):
   
    return jsonify({'message': 'Get single appointment endpoint'})