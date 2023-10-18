import React from 'react'
import '../css/Header.css'
import one from '../images/one.png'
import two from '../images/two.png'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header-name'>Решай проблему <img src={one} alt="" /> бизнеса ⬅ <br />и побеждай на <img src={two} alt="" /> лучшем <span>хакатоне.</span></h1>
        <ul>
            <input type="email" placeholder='Enter your e-mail' />
            <button>Записаться →</button>
        </ul>
        <h5>568+ человек подписались</h5>
        
        
    </div>
  )
}

export default Header