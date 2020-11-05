import React from "react";


const ProfileProgress = (props) => {
  const {profileProgress} = props
  return (
    <div className={'profile-info-progress'}>
      <h5>Ваши достижения</h5>
      <div className={'profile-info-progress-wrapper'}>
        {profileProgress.map((item, index) => {
          return (
            <div key={index} className={'profile-info-progress-item'}>
              <img className={'profile-info-progress-item-icon'} src={item.img}/>
              <p className={'profile-info-progress-item-description'}>{item.description}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
export default ProfileProgress