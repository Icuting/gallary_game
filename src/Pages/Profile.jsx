import React from "react";
import {ProfileAllInfo, ProfileMyInfo} from "../components/MainComponents";


const Profile = () => {
  return (
    <div className={'profile'}>
      <div className={'profile-wrapper'}>
        <ProfileMyInfo />
        <ProfileAllInfo />
      </div>
    </div>
  )
}
export default Profile