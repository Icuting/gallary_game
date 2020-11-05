import React from "react";
import { ProfileInfoProgressBar, ProfileActions} from "../../common";
import Input from "../../FieldComponetns/Input";
import {v4} from "uuid";
import {Link} from "react-router-dom";
import {PATH} from "../../../const";

const dataProgress = [
  {
    title: 'Ваш уровень',
    maxValue: 100,
    minValue: 1,
    value: 55,
    progress: 1,
  },
  {
    title: 'Всего достижений',
    minValue: 0,
    value: 18,
    maxValue: 48,
    progress: '18/48',
  },
  {
    title: 'Открыто всего игр',
    minValue: 0,
    value: 15,
    maxValue: 18,
    progress: '15/18',
  },
]

const dataActions = [
  {
    title: 'Мой баланс',
    action: 'Пополнить баланс',
    content: <p>У вас нет средств</p>,
  },
  {
    title: 'Промокоды',
    action: 'Активировать промокод',
    content: <Input
      id={v4()}
      name={'Промокод'}
      type={'text'}
    />,
  },
  {
    title: 'Подписка',
    action: 'Купить подписку',
    content: <p>У вас нет подписки.<br/> Обычный доступ</p>,
  },
]


const ProfileAllInfo = (props) => {
  return (
    <div className={'profile-all-info'}>
      <h5>Общая информация</h5>
      <ProfileInfoProgressBar dataProgressbar={dataProgress}/>
      <ProfileActions profileActions={dataActions} />
      <div className={'profile-all-info-edit'}>
        <Link to={PATH.EditProfile}>Изменить данные профиля</Link>
        <Link to={PATH.ChangePassword}>Сменить пароль</Link>
      </div>
    </div>
  )
}
export default ProfileAllInfo