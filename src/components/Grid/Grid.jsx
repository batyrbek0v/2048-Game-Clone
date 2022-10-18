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

    const oldGrid = grid;
    const newArray = cloneDeep(grid)

    for (let i = 0; i < 4; i++) {
      let b = newArray[i]
      let slow = 0;
      let fast = 1;

      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }

        if (b[slow] === 0 && b[fast] === 0) {
          fast++;

        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast]
          b[fast] = 0
          fast++;

        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++;

        } else if (b[slow] !== 0 && b[fast] !== 0) {

          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast]
            b[fast] = 0
            fast = slow + 1
            slow++

          } else {
            slow++
            fast = slow + 1

          }
        }
      }
    }

    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray)
    }
    setGrid(newArray)

  }
  // ========================

  // SWIPE-RIGHT
  const swipeRight = () => {

    const oldGrid = grid
    const newArray = cloneDeep(grid)

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i]
      let slow = b.length - 1
      let fast = slow - 1

      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1
          slow--
          continue
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast--

        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast]
          b[fast] = 0
          fast--

        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast--

        } else if (b[slow] !== 0 && b[fast] !== 0) {

          if (b[slow] === b[fast]) {

            b[slow] = b[slow] + b[fast]
            b[fast] = 0
            b[fast] = slow - 1
            slow--

          } else {
            slow--
            fast = slow - 1
          }
        }
      }
    }

    if (JSON.stringify(newArray) !== JSON.stringify(oldGrid)) {
      addNumber(newArray)
    }
    setGrid(newArray)
  }
  // ========================

  // SWIPE-DOWN
  const swipeDown = () => {
    let b = [...grid]
    let oldGrid = JSON.parse(JSON.stringify(grid))

    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1
      let fast = slow - 1

      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1
          slow--
          continue
        }

        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast--

        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i]
          b[fast][i] = 0
          fast--

        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast--

        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {

          if (b[slow][i] === b[fast][i]) {

            b[slow][i] = b[slow][i] + b[fast][i]
            b[fast][i] = 0

            fast = slow - 1
            slow--
          } else {
            slow--
            fast = slow - 1
          }
        }
      }
    }
    if(JSON.stringify(b) !== JSON.stringify(oldGrid)) {
      addNumber(b)
    }
    setGrid(newArray)
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


