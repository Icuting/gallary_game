import React from 'react'
import { Badge } from 'react-bootstrap'
import notificationIcon from '../../../image/alarm_notification.png';

const Notification = (props) =>{
    return(
    <div className={'header-content-notification'}>
          <div >
            <img className={'header-content-notification-icon'} alt='Уведомления' src={notificationIcon} />
          </div>
          <Badge
            pill
            className="badge-notification"
            variant="danger"
          >
            5
          </Badge>
        </div>
    )
}
export default Notification