import React from 'react'
import Board from '../Board/Board'
import cls from '../../Styles/Board.module.scss'
import c from '../../Styles/PopUp.module.scss'
import { cloneDeep } from 'lodash'
import { useEvent } from '../../hooks/UseEvent'
import Heading from '../Heading/Heading'
import PopUp from '../Game/PopUp'

const Grid = () => {

  const DOWN_ARROW = 40
  const RIGHT_ARROW = 39
  const UP_ARROW = 38
  const LEFT_ARROW = 37


  const [grid, setGrid] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])


  const [gameOver, setGameOver] = React.useState(false)


  // INITIALIZE ================================
  const initialize = () => {

    let newGrid = cloneDeep(grid)

    addNumber(newGrid)
    addNumber(newGrid)

    setGrid(newGrid)

  }

  // ==========================================


  // ADD NUMBER  - ADD AN CELL
  const addNumber = (newGrid) => {

    let added = false;
    let gridFull = false;
    let attempts = 0

    while (!added) {
      if (gridFull) {
        break;
      }
      const colX = Math.floor(Math.random() * 4)
      const colY = Math.floor(Math.random() * 4)
      attempts++;

      if (newGrid[colX][colY] === 0) {
        newGrid[colX][colY] = Math.random() > 0.5 && 2 || Math.random() > 0.2 ? 2 : 4;
        added = true;
      }

      if (attempts > 50) {
        gridFull = true
      }
    }

  }


  // SWIPE-FUNCTIONS--------------------------
  // SWIPE-LEFT
  const swipeLeft = (theEnd) => {

    let oldGrid = grid;
    let newArray = cloneDeep(grid)

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
            fast = slow + 1;
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

    if (theEnd) {
      return newArray
    } else {
      setGrid(newArray)
    }

  }
  // ========================

  // SWIPE-RIGHT
  const swipeRight = (theEnd) => {

    let oldGrid = grid
    let newArray = cloneDeep(grid)

    for (let i = 3; i >= 0; i--) {

      let b = newArray[i]
      let slow = b.length - 1
      let fast = slow - 1

      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1
          slow--;
          continue;
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
            fast = slow - 1
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

    if (theEnd) {
      return newArray
    } else {
      setGrid(newArray)
    }

  }
  // ========================

  // SWIPE-DOWN
  const swipeDown = (theEnd) => {

    let b = cloneDeep(grid)
    let oldGrid = JSON.parse(JSON.stringify(grid))

    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1
      let fast = slow - 1

      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1
          slow--
          continue;
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
    if (JSON.stringify(b) !== JSON.stringify(oldGrid)) {
      addNumber(b)
    }
    if (theEnd) {
      return b
    } else {
      setGrid(b)
    }

  }
  // ========================

  // SWIPE-UP 
  const swipeUp = (theEnd) => {

    let b = cloneDeep(grid)
    let oldGrid = JSON.parse(JSON.stringify(grid))

    for (let i = 0; i < 4; i++) {
      let slow = 0
      let fast = 1

      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1
          slow++
          continue
        }

        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast++
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i]
          b[fast][i] = 0
          fast++

        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast++

        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i]
            b[fast][i] = 0
            fast = slow + 1

            slow++
          } else {
            slow++
            fast = slow + 1
          }
        }
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(b)) {
      addNumber(b)
    }

    if (theEnd) {
      return b
    } else {
      setGrid(b)
    }
  }
  // ========================

  // GAME-OVER

  const checkGameOver = () => {

    let checker = swipeLeft(true)
    if (JSON.stringify(grid) !== JSON.stringify(checker)) {
      return false
    }

    let checker2 = swipeDown(true)
    if (JSON.stringify(grid) !== JSON.stringify(checker2)) {
      return false
    }

    let checker3 = swipeRight(true)
    if (JSON.stringify(grid) !== JSON.stringify(checker3)) {
      return false
    }

    let checker4 = swipeUp(true)
    if (JSON.stringify(grid) !== JSON.stringify(checker4)) {
      return false
    }

    return true
  }


  // ===========================================

  // RESET-GAME
  const newGame = () => {
    setGameOver(false)

    const newBoard = ([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])

    addNumber(newBoard)
    addNumber(newBoard)
    setGrid(newBoard)
  }
  // ==============================================

  // HANDLE-KEY-PRESS-DOWN
  const handleKeyDown = e => {

    if (gameOver) {
      return
    }

    switch (e.keyCode) {
      case UP_ARROW:
        swipeUp()
        break;
      case LEFT_ARROW:
        swipeLeft()
        break;
      case RIGHT_ARROW:
        swipeRight()
        break;
      case DOWN_ARROW:
        swipeDown()
        break;

      default:
        break;
    }

    let gameOverr = checkGameOver()
    if (gameOverr) {
      setGameOver(true)
    }
  }
  // =============================================



  React.useEffect(() => {
    initialize()
  }, [])

  useEvent('keydown', handleKeyDown)


  return (
    <React.Fragment>
      <Heading handleNewGame={newGame} />
      <div className={cls.container}>
        <div className={cls.game_container}>
          {gameOver && (
            <div className={c.gameOver}>
              <div className={c.game_message}>
                <h1>You lose!</h1>
                <button onClick={newGame}>Continue</button>
              </div>
            </div>
          )}
          {
            grid.map(
              (row, oneIndex) => (
                <div className={cls.grid_row} key={oneIndex}>
                  {
                    row.map((digit, index) => (
                      < Board
                        num={digit}
                        key={index}
                        restart={newGame}
                      />
                    ))
                  }
                </div>
              )
            )
          }
        </div>
      </div>
    </React.Fragment >
  )
}

export default Grid


