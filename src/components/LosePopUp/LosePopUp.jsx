import React from 'react'
import cls from '../../Styles/PopUp.module.scss'
const PopUp = ({ newGame }) => {


  return (
    <React.Fragment>
      <div className={cls.gameOver}>
        <div className={cls.game_message}>
          <h1>
            You Lose:(
          </h1>
          <button onClick={newGame}>Try Again</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PopUp
