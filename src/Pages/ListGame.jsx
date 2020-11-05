import React from "react";
import { PopularGame, AllGame } from "../components/MainComponents";

const ListGame = () =>{
  return(
    <div className={'list-game'}>
      <div className={'list-game-popular'}>
        <h4>Популярные игры</h4>
        <div>
          <PopularGame/>
          <AllGame/>
        </div>
      </div>

    </div>
  )
}
export default ListGame