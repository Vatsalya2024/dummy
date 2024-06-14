import React, { useState } from 'react';
import AddMemberForm from './Components/AddMemberForm/AddMemberForm';
import AddUserForm from './Components/AddUserForm/AddUserForm';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);

 
  const setUserRole = (isAdmin) => {
    setIsAdmin(isAdmin);
  };


  const setUserIdHandler = (userId) => {
    setUserId(userId);
  };

  return (
    <div>
    
      {!userId ? (
        <AddUserForm setUserRole={setUserRole} setUserId={setUserIdHandler} />
      ) : isAdmin ? (
        <AddMemberForm userId={userId} />
      ) : (
        <p>User added successfully. Not an admin, so cannot add member.</p>
      )}
    </div>
  );
};

export default App;
