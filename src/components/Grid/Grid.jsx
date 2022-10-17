import React from 'react'
import Board from '../Board/Board'
import cls from '../../Styles/Board.module.scss'
import { cloneDeep } from 'lodash'

const Grid = () => {

  const [grid, setGrid] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  // INITIALIZE ================================

  const initialize = () => {

    let newGrid = cloneDeep(grid)

    addNumber(newGrid)
    addNumber(newGrid)

    setGrid(newGrid)

    console.log(newGrid);
  }

  // ==========================================


  // ADD NUMBER  - ADD AN ITEM
  const addNumber = (newGrid) => {

    let added = false;
    let gridFull = false;
    let attempts = 0

    while (!added) {
      if (gridFull) {
        break;
      }

      const random1 = Math.floor(Math.random() * 4)
      const random2 = Math.floor(Math.random() * 4)
      attempts++;

      if (newGrid[random1][random2] === 0) {

        newGrid[random1][random2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
        console.log(newGrid)
        
      }
    }

  }



  // SWIPE-LEFT

  const swipeLeft = () => {
    const oldGrid = grid
    // const
  }

  // ========================

  React.useEffect(() => {

    initialize()

  }, [])


  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.game_container}>
          {
            grid.map(
              (row, oneIndex) => (
                <div className={cls.grid_row} key={oneIndex}>
                  {
                    row.map((digit, index) => (
                      <Board num={digit} key={index} index={index} />
                    ))
                  }
                </div>
              )
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Grid


