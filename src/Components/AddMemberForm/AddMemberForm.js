

// import React, { useState, useEffect } from 'react';

// const AddMemberForm = ({ userId }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     membershipExpiry: '',
//     doj: '',
//   });

//   const [members, setMembers] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchMembers();
//     fetchUsers();
//   }, []);

//   const fetchMembers = async () => {
//     try {
//       const response = await fetch('http://localhost:5174/api/Members', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       setMembers(data);
//     } catch (error) {
//       console.error('Error fetching members:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://localhost:5174/api/User', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make API call to add member
//       const response = await fetch('http://localhost:5174/api/Members', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId,
//           ...formData,
//         }),
//       });

//       if (response.ok) {
//         alert('Member added successfully!');
//         fetchMembers(); // Refresh member list after adding a new member
//       } else {
//         alert('Error adding member.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDelete = async (memberId) => {
//     try {
//       // Make API call to delete member
//       const response = await fetch(`http://localhost:5174/api/Members/${memberId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         alert('Member deleted successfully!');
//         fetchMembers(); // Refresh member list after deleting a member
//       } else {
//         alert('Error deleting member.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           required
//         />
//         <input
//           type="date"
//           name="membershipExpiry"
//           value={formData.membershipExpiry}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="doj"
//           value={formData.doj}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add Member</button>
//       </form>
//       <h2>Members List</h2>
//       <ul>
//         {members.map((member) => (
//           <li key={member.memberId}>
//             {member.name} - {member.email} - {member.phone} - Expiry: {member.membershipExpiry}
//             <button onClick={() => handleDelete(member.memberId)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Users List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.userId}>
//             {user.userName} - {user.email} - Admin: {user.isAdmin ? 'Yes' : 'No'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AddMemberForm;

import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './AddMemberForm.css'; // Import CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddMemberForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipExpiry: '',
    doj: '',
  });

  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchMembers();
    fetchUsers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch('http://localhost:5174/api/Members', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5174/api/User', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to add member
      const response = await fetch('http://localhost:5174/api/Members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          ...formData,
        }),
      });

      if (response.ok) {
        alert('Member added successfully!');
        fetchMembers(); // Refresh member list after adding a new member
      } else {
        alert('Error adding member.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (memberId) => {
    try {
      // Make API call to delete member
      const response = await fetch(`http://localhost:5174/api/Members/${memberId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Member deleted successfully!');
        fetchMembers(); // Refresh member list after deleting a member
      } else {
        alert('Error deleting member.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="membershipExpiry"
              value={formData.membershipExpiry}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="doj"
              value={formData.doj}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Member</button>
        </form>
      </div>
      <div className="card">
        <h2>Members List</h2>
        <TransitionGroup>
          {members.map((member) => (
            <CSSTransition key={member.memberId} timeout={500} classNames="item">
              <div className="list-item">
                <span>{member.name}</span>
                <span>{member.email}</span>
                <span>{member.phone}</span>
                <span>Expiry: {member.membershipExpiry}</span>
                <button onClick={() => handleDelete(member.memberId)} className="btn btn-danger">Delete</button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <div className="card">
        <h2>Users List</h2>
        <TransitionGroup>
          {users.map((user) => (
            <CSSTransition key={user.userId} timeout={500} classNames="item">
              <div className="list-item">
                <span>{user.userName}</span>
                <span>{user.email}</span>
                <span>Admin: {user.isAdmin ? 'Yes' : 'No'}</span>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default AddMemberForm;
