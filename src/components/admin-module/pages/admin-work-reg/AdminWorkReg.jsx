import React, { useState } from 'react';
import FindUserByEmail from '../../components/findUserByEmail/FindUserByEmail';

const AdminWorkReg = () => {
  const [isExistUser, setExistUser] = useState(true);
  const toggleIsExistUser = () => setExistUser(!isExistUser);
  return (
    <>
      <FindUserByEmail isExistUser={isExistUser} toggleIsExistUser={toggleIsExistUser}/>
    </>
  );
}

export default AdminWorkReg;
