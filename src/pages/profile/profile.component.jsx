import React from 'react';
import { Outlet } from 'react-router-dom';
//import Directory from '../../components/home/directory/directory.component';
import ProfilePhoto from '../../components/profile/profile.photo.component'
import { ProfileContainer } from './profile.styles';

const Profile = () => {
  console.log('Profile Loaded...')
  return(
  <ProfileContainer>
    <ProfilePhoto />
    
  </ProfileContainer>
)}

export default Profile;