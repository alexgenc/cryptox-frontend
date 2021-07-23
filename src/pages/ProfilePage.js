import React, { useEffect, useContext } from 'react';
import ProfileForm from '../components/ProfileForm';
import UserContext from '../context/UserContext';

const ProfilePage = () => {

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    document.title = `CryptoX - ${currentUser.username} `;
  }, [currentUser.username]);

  return (
    <>
      <h1 className="font-bold text-4xl mt-5 mb-5">My Profile</h1>
      <ProfileForm />
    </>
  )
}

export default ProfilePage;