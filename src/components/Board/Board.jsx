import React from 'react'
import cls from '../../Styles/Board.module.scss'


const Board = ({ num, index }) => {


  return (
    <React.Fragment>
      <div className={cls.board} style={{ "background": num === 2 || num == 4 ? "#eee4da" : "#cdc1b4"}}>
        {num !== 0 ? num : ""}
      </div>
    </React.Fragment>
  )
}

export default Board
