import React from 'react'
import '../css/Mesta.css'

const Mesta = () => {
  return (
    <div className='mesta'>
        <h6>документация хакатона</h6>
        <h1>готовые процессы</h1>
        <ul>
            <div className="items">
            <div className="it-one">
                <h1>🏆CHAMP</h1>
                <div></div>
                <p>Start ---------- FINISH</p>
                </div>
                <div className="it-two">
                    <h2>1 Место <br /> Лучшее решение</h2>
                    <h1>$400</h1>
                </div>
            </div>
            <div className="items classna">
                <div className="it-one">
                <h1>🏆CHAMP</h1>
                <div></div>
                <p>Start ---------- FINISH</p>
                </div>
                <div className="it-two">
                    <h2>1 Место <br /> Лучшее решение</h2>
                    <h1>$400</h1>
                </div>
            </div>
            <div className="items">
            <div className="it-one">
                <h1>🏆CHAMP</h1>
                <div></div>
                <p>Start ---------- FINISH</p>
                </div>
                <div className="it-two">
                    <h2>1 Место <br /> Лучшее решение</h2>
                    <h1>$400</h1>
                </div>
            </div>
        </ul>
        <button>Подробнее →</button>
        <p>Условия оферты, требования к командам, возрасту и другие положения <br /> проведения мероприятия.</p>
    </div>
  )
}

export default Mesta