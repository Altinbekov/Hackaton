import React from 'react'
import '../css/Zapros.css'
import six from '../images/six.png'
import seven from '../images/seven.png'

const Zapros = () => {
  return (
    <div className='zapros'>
        <div className="item">
            <div className="item-text">
                <h4>Поддержка стартапов</h4>
                <h1>Если есть <br /> шикарный проект?</h1>
                <p>Делаешь стартап и необходима <br /> экспертиза? Свяжись с нами!</p>
                <button>Запрос →</button>
            </div>
            <div className="item-img">
                <img src={six} alt="" />
            </div>
        </div>
        <div className="item">
            <div className="item-text">
                <h4>Корпорациям</h4>
                <h1>Возможности для <br /> сотрудничества.</h1>
                <p>У вас есть запрос на продукт или <br /> совместный проект. Напишите нам!</p>
                <button>Связь →</button>
            </div>
            <div className="item-img">
            <img src={seven} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Zapros