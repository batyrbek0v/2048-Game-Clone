import React from 'react'
import cls from '../../Styles/Board.module.scss'
import { getColor as useColor } from '../../utils/GetColor'
import { setColor } from '../../utils/SetColor'
import PopUp from '../Game/PopUp'

const Board = ({ num, restart }) => {

  return (
    <React.Fragment>
      <PopUp score={num} restart={restart}/>
      <div
        className={cls.grid_cell}
        style={
          {
            "background": useColor(num),
            "color": setColor(num),
            "fontSize": num === 2048 && "45px"
          }
        }
      >
        {num != 0 ? num : ''}
      </div>
    </React.Fragment >
  )
}

export default Board
