import React from 'react'
import Board from '../Board/Board'
import cls from '../../Styles/Board.module.scss'

const Grid = () => {

  const [grid, setGrid] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  return (
    <div>
      <div className={cls.container}>
        {
          grid.map(
            (row, oneIndex) => (
              <div className={cls.game_container} key={oneIndex}>
                {row.map((digit, index) => (
                  <Board num={digit} key={index} />
                ))}
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Grid


