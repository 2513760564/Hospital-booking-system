import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    dateOfBirth: ''
  });

  // Simulate fetching user data
  useEffect(() => {
    // TODO: Fetch actual user data from backend
    const mockUserData = {
      name: 'John Doe',
      phone: '13800138000',
      email: 'john@example.com',
      dateOfBirth: '1990-01-01'
    };
    setUserData(mockUserData);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update profile:', userData);
    // TODO: Connect to backend API
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={userData.phone}
            readOnly
            className="readonly-field"
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={userData.dateOfBirth}
            onChange={(e) => setUserData({...userData, dateOfBirth: e.target.value})}
          />
        </div>
        
        <button type="submit" className="btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
