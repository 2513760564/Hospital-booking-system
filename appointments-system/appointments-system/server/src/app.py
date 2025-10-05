from flask import Flask, jsonify
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///appointments.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
   
    from src.routes.booking_routes import booking_bp
    app.register_blueprint(booking_bp, url_prefix='/api')
    
 
    @app.route('/api/health')
    def health_check():
        return jsonify({'status': 'healthy', 'message': 'Appointment API is running'})
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)