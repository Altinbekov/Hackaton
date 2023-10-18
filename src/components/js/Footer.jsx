import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h1>Будем на связи!</h1>
        <p>Мы пишем только самое интересное и по делу!</p>
        <ul>
        <input type="email" placeholder='Enter your e-mail'/>
        <button>Подписаться →</button>
        </ul>
    </div>
  )
}

export default Footer