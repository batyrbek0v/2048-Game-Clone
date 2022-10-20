import React from 'react'
import cls from '../../Styles/Board.module.scss'
import { getColor as useColor } from '../../utils/GetColor'
import { setColor } from '../../utils/SetColor'
import PopUp from '../Game/PopUp'

const Board = ({ num, restart }) => {

  // const [win, setWin] = React.useState(false)

  // num === 2048 && setWin(true)

  // const continueGame = () => {
  //   setWin(true)
  // }


  return (
    <React.Fragment>
      {
        num === 2048 && (<PopUp score={num} />)
      }
      <div
        className={cls.grid_cell}
        style={
          {
            "background": useColor(num),
            "color": setColor(num),
            "fontSize": num === 2048 && "45px",
          }
        }
      >
        {num != 0 ? num : ''}
      </div>
    </React.Fragment >
  )
}

export default Board
