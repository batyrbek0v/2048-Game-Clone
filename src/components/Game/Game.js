import React from 'react'
import Tile from '../Tile/Tile'
import cls from '../../Styles/Board.module.scss'
import { cloneDeep } from 'lodash'
import { useEvent } from '../../hooks/UseEvent'
import Heading from '../Heading/Heading'
import PopUp from '../LosePopUp/LosePopUp'
import left from '../../assets/Sound/swipeLeft.mp3'
import right from '../../assets/Sound/swipeRight.mp3'
import up from '../../assets/Sound/swipeUp.mp3'
import gameOverSound from '../../assets/Sound/gameOver.mp3'
import { useSwipeable } from 'react-swipeable'

const Matrix = () => {

  const DOWN_ARROW = 40
  const RIGHT_ARROW = 39
  const UP_ARROW = 38
  const LEFT_ARROW = 37



  const [matrix, setMatrix] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  const [score, setScore] = React.useState(0)
  const [gameOver, setGameOver] = React.useState(false)

  // let newScore = 0

  // INITIALIZE ================================
  const initialize = () => {

    let newMatrix = cloneDeep(matrix)

    addCell(newMatrix)
    addCell(newMatrix)

    setMatrix(newMatrix)

  }

  // ==========================================


  // ADD NUMBER  - ADD AN CELL
  const addCell = (newMatrix) => {

    let added = false;
    let matrixFull = false;
    let attempts = 0

    while (!added) {
      if (matrixFull) {
        break;
      }
      const cell = Math.floor(Math.random() * 4)
      const cell2 = Math.floor(Math.random() * 4)
      attempts++;

      if (newMatrix[cell][cell2] === 0) {
        newMatrix[cell][cell2] = Math.random() > 1 && 2 || Math.random() > 0.1 ? 2 : 4;
        added = true;
      }

      if (attempts > 50) {
        matrixFull = true
      }
    }

  }


  // SWIPE-FUNCTIONS--------------------------
  // SWIPE-LEFT
  const swipeLeft = (theEnd) => {

    let oldMatrix = matrix;
    let newMatrix = cloneDeep(matrix)

    for (let i = 0; i < 4; i++) {
      let b = newMatrix[i]
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

            // newScore = b[slow] + b[fast] + newScore
            setScore(score + b[slow])

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

    if (JSON.stringify(oldMatrix) !== JSON.stringify(newMatrix)) {
      addCell(newMatrix)
    }

    if (theEnd) {
      return newMatrix
    } else {
      setMatrix(newMatrix)
    }

  }
  // ========================

  // SWIPE-RIGHT
  const swipeRight = (theEnd) => {

    let oldMatrix = matrix
    let newMatrix = cloneDeep(matrix)

    for (let i = 3; i >= 0; i--) {

      let b = newMatrix[i]
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
            // newScore = b[slow] + b[fast] + newScore
            setScore(score + b[slow])

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

    if (JSON.stringify(newMatrix) !== JSON.stringify(oldMatrix)) {
      addCell(newMatrix)
    }

    if (theEnd) {
      return newMatrix
    } else {
      setMatrix(newMatrix)
    }

  }
  // ========================

  // SWIPE-DOWN
  const swipeDown = (theEnd) => {

    let b = cloneDeep(matrix)
    let oldMatrix = JSON.parse(JSON.stringify(matrix))

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
            // newScore = b[slow][i] + b[fast][i] + newScore
            setScore(score + b[slow][i])


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
    if (JSON.stringify(b) !== JSON.stringify(oldMatrix)) {
      addCell(b)
    }
    if (theEnd) {
      return b
    } else {
      setMatrix(b)
    }

  }
  // ========================

  // SWIPE-UP 
  const swipeUp = (theEnd) => {

    let b = cloneDeep(matrix)
    let oldMatrix = JSON.parse(JSON.stringify(matrix))

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

            // newScore = b[slow][i] + b[fast][i] + newScore
            setScore(score + b[slow][i])

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
    if (JSON.stringify(oldMatrix) !== JSON.stringify(b)) {
      addCell(b)
    }

    if (theEnd) {
      return b
    } else {
      setMatrix(b)
    }
  }
  // ========================

  // GAME-OVER

  const checkGameOver = () => {

    let checker = swipeLeft(true)
    if (JSON.stringify(matrix) !== JSON.stringify(checker)) {
      return false
    }

    let checker2 = swipeDown(true)
    if (JSON.stringify(matrix) !== JSON.stringify(checker2)) {
      return false
    }

    let checker3 = swipeRight(true)
    if (JSON.stringify(matrix) !== JSON.stringify(checker3)) {
      return false
    }

    let checker4 = swipeUp(true)
    if (JSON.stringify(matrix) !== JSON.stringify(checker4)) {
      return false
    }

    return true
  }


  // ===========================================

  // RESET-GAME
  const newGame = () => {
    setGameOver(false)

    const newMatrix = ([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])
    setScore(0)
    addCell(newMatrix)
    addCell(newMatrix)
    setMatrix(newMatrix)
  }
  // ==============================================

  // HANDLE-KEY-PRESS-DOWN
  const handleKeyDown = e => {

    if (gameOver) {
      return
    }
    const upSwipe = new Audio(up)
    const leftSwipe = new Audio(left)
    const rightSwipe = new Audio(right)
    const youLose = new Audio(gameOverSound)

    switch (e.keyCode) {
      case UP_ARROW:
        swipeUp()
        upSwipe.play()
        break;
      case LEFT_ARROW:
        swipeLeft()
        leftSwipe.play()
        break;
      case RIGHT_ARROW:
        swipeRight()
        rightSwipe.play()
        break;
      case DOWN_ARROW:
        swipeDown()
        rightSwipe.play()
        break;

      default:
        break;
    }

    let gameOverr = checkGameOver()
    if (gameOverr) {
      setGameOver(true)
      youLose.play()
    }
  }
  // =============================================



  React.useEffect(() => {
    initialize()
  }, [])

  useEvent('keydown', handleKeyDown)


  // SWIPES FOR MOBILE VERSION

  const mobileSwipe = useSwipeable({
    onSwipedUp: (() => swipeUp()),
    onSwipedDown: (() => swipeDown()),
    onSwipedLeft: (() => swipeLeft()),
    onSwipedRight: (() => swipeRight()),
  })

  // ===============================

  return (
    <React.Fragment>
      <Heading handleNewGame={newGame} score={score} />
      <div className={cls.container}>
        <div className={cls.game_container} {...mobileSwipe}>

          {
            gameOver && (<PopUp newGame={newGame} />)
          }
          {
            matrix.map(
              (col, index) => {
                return (
                  <div className={cls.tile_row} key={index}>
                    {
                      col.map((item, index) => (
                        <Tile
                          num={item}
                          key={index}
                          restart={newGame}
                        />
                      ))
                    }
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    </React.Fragment >
  )
}

export default Matrix


