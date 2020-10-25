import React from "react";
import { PopularGame } from "../components/common";
import AllGame from "../components/common/AllGame";

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