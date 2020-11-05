import React from "react";
import Slider from 'react-slick'
import {v4} from "uuid";
import {formatData} from "../../../utils/help-data-format";

const allGameList = [
  {
    name: 'Поймай слона',
    id: v4(),
    rating: '4.5/5'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    rating: '5/5',
  },
  {
    name: 'Поймай слона',
    id: v4(),
    rating: '4.8/5'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    rating: '4.8/5'
  },
  {
    name: 'Поймай слона',
    id: v4(),
    dateUpdate: new Date(),
    rating: '4.7/5'
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
        {allGameList.map((item, index) =>{
          return(
            <div key={index} className={'popular-game-list-item'}>
              <div className={'popular-game-list-item-image'}>
                <h6 className={'popular-game-list-item-name'}>{item.name}</h6>
                <p className={'popular-game-list-item-rating'} >
                  Оценка:
                  <span>{item.rating}</span>
                </p>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default PopularGame