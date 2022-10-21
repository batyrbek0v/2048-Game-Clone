import React, { useState } from 'react'
import cls from '../../Styles/Heading.module.scss'
import { GoUnmute } from 'react-icons/go'
import { GoMute } from 'react-icons/go'

const Heading = ({ handleNewGame, score }) => {



  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.heading}>
          <div className={cls.logo}>
            <h1>2048</h1>
          </div>
          <div className={cls.score_block}>
            <div className={cls.score}>
              <p>Score</p>
              <p>{score}</p>
            </div>
            <div className={cls.score}>
              <p>Best</p>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className={cls.bottom}>
          <div className={cls.desc}>
            <button>
              <GoUnmute size={22} />
            </button>
            <button>
              <GoMute size={22} />
            </button>
          </div>
          <button
            className={cls.newGame}
            onClick={handleNewGame}
          >New Game</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Heading




  // const [initialState, setInitialState] = useState(0)

  // React.useEffect(() => {

  //   localStorage.setItem('score', score)
  //   const base = JSON.parse(localStorage.getItem('score'))
  //   setState(base)

  //   localStorage.setItem('initialScore', 0)
  //   const initial = JSON.parse(localStorage.getItem('initialScore'))
  //   setInitialState(initial)

  // }, [score])
