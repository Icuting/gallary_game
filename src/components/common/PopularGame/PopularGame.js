import React from "react";
import Slider from 'react-slick'
import {v4} from "uuid";
import {formatData} from "../../../utils/help-data-format";

const game = ['игра', 'игра1', 'игра2', 'игра3', 'игра4', 'игра5', 'игра6', 'игра7',]
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
const PopularGame = () => {
  const settings = {
    accessibility: true,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div className={'slider-popular-game'}>
      <Slider {...settings}>
        {/*{game.map(item =>{*/}
        {/*  return(*/}
        {/*    <div className={'slider-popular-game-item'}>{item}</div>*/}
        {/*  )*/}
        {/*})}*/}
        {allGameList.map(item =>{
          return(
            <div className={'all-game-list-item'}>
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
      </Slider>
    </div>
  )
}
export default PopularGame