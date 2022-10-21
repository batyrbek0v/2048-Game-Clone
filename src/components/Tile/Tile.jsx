import React from 'react'
import cls from '../../Styles/Board.module.scss'
import { getColor as useColor } from '../../utils/GetColor'
import { setColor } from '../../utils/SetColor'
import PopUp from '../WinPopUp/WinPopUp'
import win from '../../assets/Sound/winSound.mp3'



const Tile = ({ num, restart }) => {

  return (
    <React.Fragment>
      {
        num === 2048 && < PopUp score={num} restart={restart} />
      }
      <div
        className={cls.cell}
        style={
          {
            "background": useColor(num),
            "color": setColor(num),
            "fontSize": num >= 2048 && "35px",
          }
        }
      >
        {num != 0 ? num : ''}
      </div>

    </React.Fragment >
  )
}

export default Tile
