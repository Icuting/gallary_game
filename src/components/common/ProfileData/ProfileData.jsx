import React from "react";

const ProfileData = (props) => {
  const {dataProfile} = props
  return (
    <div className={'profile-info-main-info'}>
      {dataProfile.map((item, index) => {
        return (
          <p
            key={index}
            className={'profile-info-main-info-name info-data'}>
            {item.title}:
            <span>
              {item.name}
            </span>
          </p>
        )
      })}
    </div>
  )
}
export default ProfileData