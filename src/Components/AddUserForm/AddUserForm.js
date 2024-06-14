

import React, { useState } from 'react';
import './AddUserForm.css'; // Import CSS file for styling

const AddUserForm = ({ setUserRole, setUserId }) => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    email: '',
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to add user
      const response = await fetch('http://localhost:5174/api/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setUserId(data.userId); // Set user ID
        setUserRole(data.isAdmin); // Set user role
        alert('User added successfully!');
      } else {
        alert('Error adding user.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-user-container">
      <form onSubmit={handleSubmit} className="add-user-form">
        <img src="https://images.immediate.co.uk/production/volatile/sites/3/2023/08/2023.06.28-06.20-boundingintocomics-649c79f009cdf-Cropped-8d74232.png?quality=90&resize=556,370" alt="User Image" className="user-image" />
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label>
          Are you registering as an admin?
          <input
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={(e) =>
              setFormData({ ...formData, isAdmin: e.target.checked })
            }
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;