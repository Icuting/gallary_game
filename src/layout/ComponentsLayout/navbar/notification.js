import React from 'react'
import {Badge, Dropdown} from 'react-bootstrap'
import notificationIcon from '../../../image/alarm_notification.png';
import {v4} from 'uuid'

const Notification = (props) => {
  return (
    <Dropdown drop='left'>
      <Dropdown.Toggle
        as={'div'}
        id={v4()}
        className={'header-content-notification'}>
        <div>
          <img className={'header-content-notification-icon'} alt='Уведомления' src={notificationIcon}/>
        </div>
        <Badge
          pill
          className="badge-notification"
          variant="danger"
        >
          5
        </Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu
        align={'left'}
        className={'header-content-notification-dropdown'}>
        <article className={'header-content-notification-dropdown-item'}>Уведомление</article>
        <article className={'header-content-notification-dropdown-item'}>Уведомление</article>
        <article className={'header-content-notification-dropdown-item'}>Уведомление</article>
        <article className={'header-content-notification-dropdown-item'}>Уведомление</article>
        <article className={'header-content-notification-dropdown-item'}>Уведомление</article>
        <Dropdown.Divider />
        <button className={'main-button header-content-notification-dropdown-button'}>Посмотреть все</button>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Notification