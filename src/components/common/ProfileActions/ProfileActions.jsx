import React from "react";
import { WindowActions } from "../index";

const ProfileActions = (props) => {
  const {profileActions} = props
  return (
    <div className={'profile-all-info-actions'}>
      {profileActions.map((item, index) => {
        return (
          <WindowActions
            key={index}
            title={item.title}
            action={item.action}
          >
            {item.content}
          </WindowActions>
        )
      })}
    </div>
  )
}
export default ProfileActions