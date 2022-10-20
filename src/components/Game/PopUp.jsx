import React from 'react'
import cls from '../../Styles/PopUp.module.scss'
const PopUp = ({ score, newGame }) => {

  return (
    <React.Fragment>
      <div className={score == 2048 ? cls.container : cls.gameOver}>
        <div className={cls.game_message}>
          <h1>
            {score == 2048 ? 'You Won !' : ' You Lose:('}
          </h1>
          {
            score == 2048
              ? (<button onClick={''}>Continue</button>)
              : (<button onClick={newGame}>Try Again</button>)
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default PopUp
