import React from "react";
import avatar from "../../../image/avatar.png";
import progress_time from "../../../image/progress/progress_fast_time.png";
import {ProfileData, ProfileProgress} from "../../common";

const progress = [
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  },
  {
    img: progress_time,
    description: 'description your progress',
  }
]

const profileData = [
  {title: 'Логин', name: 'Igris'},
  {title: 'Имя', name: 'Иван'},
  {title: 'Фамилия', name: 'Гусев'},
  {title: 'Возраст', name: '21'},
  {title: 'Email', name: 'vanya_gusev99@mail.ru'},
]

const ProfileMyInfo = (props) =>{
  return(
    <div className={'profile-info'}>
      <img className={'profile-info-avatar'} src={avatar}/>
      <ProfileData dataProfile={profileData} />
      <ProfileProgress profileProgress={progress} />
    </div>
  )
}
export default ProfileMyInfo