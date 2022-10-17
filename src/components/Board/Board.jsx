import React, { useState } from 'react'
import cls from '../../Styles/Board.module.scss'


const Board = ({ num, index }) => {


  return (
    <React.Fragment>
      <div
        className={cls.grid_cell}
        style={{ "color": num == 2 || num == 4 ? "#776e65" : "white" }}
      >
        {num}
      </div>
    </React.Fragment >
  )
}

export default Board
