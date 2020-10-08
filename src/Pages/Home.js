import React from "react";
import newsImage from '../image/news.png'
const news = [
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
  {name: 'Заголовок', description: 'тут должно быть описание'},
]
const Home = (props) => {
  return(
    <>
      <div className='home'>
        <div className='home-news'>
          <h3>Новости</h3>
          <div className='home-news-content'>
            {news.map((item, index)=>{
              return(
                <div key={index} className='home-news-content-item'>
                  <div>
                    <img src={newsImage} className={'home-news-content-item-image'} />
                  </div>
                  <div className={'home-news-content-item-info'}>
                    <h6 className={'home-news-content-item-title'}>{item.name}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Home