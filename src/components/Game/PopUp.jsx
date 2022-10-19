import React from 'react'
import cls from '../../Styles/PopUp.module.scss'
const PopUp = ({ restart, titleText }) => {

  return (
    <React.Fragment>
     
      {/* {
        !gameOver && (
          <div className={cls.gameOver}>
            <div className={cls.game_message}>
              <h1>You Lose!</h1>
              <button onClick={restart}>Restart</button>
            </div>
          </div>
        ) 
      } */}
    </React.Fragment>
  )
}

export default PopUp
