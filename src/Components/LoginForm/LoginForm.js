// import React, { useState } from 'react';
// import AddUserForm from '../AddUserForm/AddUserForm';
// const LoginForm = ({ setUserRole }) => {
//   const [userId, setUserId] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make API call to get user details
//       const response = await fetch(`http://localhost:5174/api/User/${userId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setUserRole(data.isAdmin);
//         setIsAdmin(data.isAdmin);
//       } else {
//         alert('User not found.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   if (isAdmin) {
//     return <AddUserForm />;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         User ID:
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           required
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;