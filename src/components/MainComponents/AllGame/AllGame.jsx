import React from 'react'
import { v4 } from 'uuid'
import { formatData } from '../../../utils/help-data-format'
const allGameList = [
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    description: 'Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    description: 'Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    description: 'Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    description: 'Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    description: 'Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры Описание игры'
  }
]

const AllGame = (props) =>{
  return(
    <div className={'all-game'}>
      <h4 className={'all-game-title'}>Все игры</h4>
      <div className={'all-game-list'}>
        {allGameList.map((item, index) =>{
          return(
            <div key={index} className={'all-game-list-item'}>
              <div className={'all-game-list-item-image'}>
                <h6 className={'all-game-list-item-name'}>{item.name}</h6>
                <p className={'all-game-list-item-date'} >
                   Последнее обновление:
                  <span className={'all-game-list-item-date-update'}>{formatData(item.dateUpdate, 'L')}</span>
                </p>
              </div>
              <div className={'all-game-list-item-text'}>
                <h6 className={'all-game-list-item-name'}>Описание</h6>
                <p className={'all-game-list-item-description'}>{item.description}</p>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
export default AllGame