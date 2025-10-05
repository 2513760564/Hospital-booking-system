import pytest
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    response = client.get('/api/health')
    assert response.status_code == 200
    data = response.get_json()
    assert data['status'] == 'healthy'

def test_create_appointment(client):
    appointment_data = {
        'name': 'John Doe',
        'email': 'john@example.com',
        'date': '2025-09-25',
        'time': '10:00',
        'service': 'consultation'
    }
    
    response = client.post('/api/appointments', json=appointment_data)
    assert response.status_code == 201
    data = response.get_json()
    assert data['success'] == True
    assert 'Appointment booked successfully' in data['message']

def test_get_appointments(client):
    response = client.get('/api/appointments')
    assert response.status_code == 200
    data = response.get_json()
    assert 'data' in data
    assert 'count' in data