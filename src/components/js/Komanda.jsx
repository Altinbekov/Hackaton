import React from 'react'
import '../css/Komanda.css'
import eight from'../images/eight.png'

const Komanda = () => {
  return (
    <div className='komanda'>
        <h4>Регистрация</h4>
        <h1>Зарегистрироваться одному или с <br /> командой. Выбирай.</h1>
        <ul>
            <div className="ite">
                <div className="circle">👤</div>
                <h2>Один</h2>
                <p>+ Укажи свой профиль</p>
                <p>+ Получи доступ к чату</p>
                <p>+ Задавай вопросы</p>
                <p>+ Найди единомышленников</p>
                <button>Я готов →</button>
                <h6>Подтверждаю участие</h6>
            </div>
            <div className="ite">
            <div className="circle"><img src={eight} alt="" /></div>
                <h2>Команда</h2>
                <p>+ Заполните профиль команды</p>
                <p>+ Получите доступ к чату</p>
                <p>+ Начните раньше других</p>
                <p>+ Получите поддержку от трекеров</p>
                <button>Мы готовы →</button>
                <h6>Подтверждаю участие</h6>
            </div>
        </ul>
        <h5>Want to support us without the perks?</h5>
        <p>Leave a donation →</p>
    </div>
  )
}

export default Komanda