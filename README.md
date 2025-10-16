# 🏥 Hospital Booking System

> A full-stack hospital appointment management system that supports online doctor scheduling, patient appointment booking, and backend management.  
> This repository contains both frontend and backend modules, designed for team collaboration and modular development.

---

## 📚 Overview

The **Hospital Booking System** aims to provide a comprehensive solution for managing hospital appointments online.  
It allows patients to make appointments, doctors to manage their schedules, and administrators to control data access and services.

### ✨ Key Features
- 🧑‍⚕️ Doctor information management (CRUD)
- 📅 Doctor schedule management (available time slots, leave, etc.)
- 📝 Patient appointment booking
- 🔐 Authentication and authorization
- 🧪 Automated testing with Jest
- 🌐 Frontend + backend separation for modular development

---

## 🧱 Project Structure

Below is a simplified view of the project structure:
Hospital-booking-system/
├── appointments-system/ # Frontend project (React/Vue)
│ ├── src/
│ ├── package.json
│ └── ...
│
├── backend/ # Main backend (initial version / shared APIs)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── ...
│
├── doctor-schedule-system/ # Independent module for doctor & schedule management
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── tests/
│ ├── server.js
│ ├── package.json
│ └── ...
│
├── README.md
└── .gitignore


> 📌 `doctor-schedule-system` is a refactored backend module focusing on doctor and schedule management.  
> 📌 `appointments-system` contains the frontend code.  
> 📌 `backend` contains the original backend structure (patient appointment system).

---

## 🧰 Tech Stack

**Frontend**
- React / Vue (depending on the implementation)
- Axios
- UI frameworks such as Ant Design, Element UI, or Tailwind CSS

**Backend**
- Node.js
- Express.js
- Mongoose / Sequelize (depending on DB)
- JWT authentication
- Jest for unit testing

**Others**
- Git / GitHub for team collaboration
- RESTful API design
- Branch-based development workflow (`feature/*`, `restructure/*`)

---


🧑‍💻 Contributing
We use a branch-based development model:
main — production-ready code
feature/* — feature development branches
restructure/* — refactoring branches

✉️ Contact
📌 GitHub: https://github.com/2513760564/Hospital-booking-system
🧑‍💻 Maintainers: Project team
💬 Feedback: Please submit via GitHub Issues or Pull Requests

Thanks for checking out this project!
