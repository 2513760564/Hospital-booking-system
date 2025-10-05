from flask import jsonify, request
from datetime import datetime

 
appointments = []

class BookingController:
    @staticmethod
    def create_appointment():
        try:
            data = request.get_json()
            
            
            required_fields = ['name', 'email', 'date', 'time', 'service']
            for field in required_fields:
                if field not in data or not data[field]:
                    return jsonify({
                        'success': False,
                        'message': f'Missing required field: {field}'
                    }), 400
            
             
            appointment = {
                'id': len(appointments) + 1,
                'name': data['name'],
                'email': data['email'],
                'date': data['date'],
                'time': data['time'],
                'service': data['service'],
                'status': 'confirmed',
                'created_at': datetime.now().isoformat()
            }
            
            appointments.append(appointment)
            
            return jsonify({
                'success': True,
                'data': appointment,
                'message': 'Appointment booked successfully'
            }), 201
            
        except Exception as e:
            return jsonify({
                'success': False,
                'message': f'Internal server error: {str(e)}'
            }), 500
    
    @staticmethod
    def get_appointments():
        return jsonify({
            'success': True,
            'data': appointments,
            'count': len(appointments)
        }), 200