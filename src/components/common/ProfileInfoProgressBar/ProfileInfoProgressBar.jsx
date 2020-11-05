import React from "react";
import {CircularProgressbar} from "react-circular-progressbar";

const ProfileInfoProgressBar = (props) => {
  const {dataProgressbar} = props
  return (
    <div className={'profile-all-info-wrapper'}>
      {dataProgressbar.map((item, index) => {
        return (
          <div key={index} className={'profile-all-info-progressbar'}>
            <h5>{item.title}:</h5>
            <CircularProgressbar
              className={'profile-progress-bar'}
              minValue={item.minValue}
              value={item.value}
              maxValue={item.maxValue}
              text={item.progress}
            />
          </div>
        )
      })}
    </div>
  )
}
export default ProfileInfoProgressBar