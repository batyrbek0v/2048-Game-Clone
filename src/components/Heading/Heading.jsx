import React from 'react'
import cls from '../../Styles/Heading.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Heading = ({ handleNewGame }) => {


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
              <p>22</p>
            </div>
            <div className={cls.score}>
              <p>Best</p>
              <p>24292</p>
            </div>
          </div>
        </div>
        <div className={cls.bottom}>
          <div className={cls.desc}>
            <p>Join the tiles, get to <span>2048!</span></p>
            <a href="#">How to play <AiOutlineArrowRight /></a>
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
