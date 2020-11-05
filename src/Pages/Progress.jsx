import React from "react";

const progressAll = [
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
  {name: 'Достижение', description: 'Здесь должно быть описание достижения', date: 'Дата', game: 'Какая игра'},
]

const Progress = () => {
  const fiveLastProgress = progressAll.slice(0, 5); // вынести в константы
  return (
    <div className={'progress-game'}>
      <h3>Достижения</h3>
      <div className={'progress-game-last'}>
        <h5>Последние достижения</h5>
        <div className={'progress-game-last-list'}>
          {fiveLastProgress.map((item, index) => {
            return (
              <div key={index} className={'progress-game-last-list-item'}>
                <h6 className={'progress-game-last-list-item-title'}>{item.name}</h6>
                <p className={'progress-game-last-list-item-description'}>{item.description}</p>
                <p className={'progress-game-last-list-item-game'}>{item.game}</p>
                <p className={'progress-game-last-list-item-date'}>{item.date}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={'progress-game-all'}>
        <h5>Все достижения</h5>
        <div className={'progress-game-all-list'}>
          {progressAll.map((item, index) => {
            return (
              <div key={index} className={'progress-game-all-list-item'}>
                <h6 className={'progress-game-all-list-item-title'}>{item.name}</h6>
                <p className={'progress-game-all-list-item-description'}>{item.description}</p>
                <p className={'progress-game-all-list-item-game'}>{item.game}</p>
                <p className={'progress-game-all-list-item-date'}>{item.date}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Progress