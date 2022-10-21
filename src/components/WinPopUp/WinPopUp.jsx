import React from 'react'
import cls from '../../Styles/PopUp.module.scss'

const WinPopUp = ({ score, restart }) => {

  // const [win, setWin] = React.useState(false)

  // const winner = win

  // const removePopUp = () => score == 2048 ? setWin(true) : setWin(false)


  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.game_message}>
          <h1>
            You Won !
          </h1>
          <button onClick={restart}>NEW GAME!</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WinPopUp
