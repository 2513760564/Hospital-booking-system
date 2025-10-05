#!/bin/bash

echo "Setting up Appointment Booking System..."

 
echo "Installing frontend dependencies..."
cd client
npm install

 
echo "Installing backend dependencies..."
cd ../server
pip install -r requirements.txt

echo "Setting up environment..."
cp ../configuration/development.json .env

echo "Setup completed successfully!"
echo "To start the development servers:"
echo "  Backend: cd server && python app.py"
echo "  Frontend: cd client && npm run dev"