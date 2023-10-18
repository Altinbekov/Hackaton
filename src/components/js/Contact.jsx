import React from 'react';
import '../css/Contact.css';
import nine from "../images/nine.png"
import ten from "../images/ten.png"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact_name">
            <img className='nine' src={nine} alt="" />
            <h1>Contact</h1>
            <img className='ten' src={ten} alt="" />
        </div>
        <div className="contact_profil">
            <button>Профиль</button>
            <p>Сначала регистрируется <br /> капитан команды. После <br /> этого вы сможете внести, <br /> контактные данные <br /> участников своей <br /> команды. <br /> <br />
            <span>
              Внесите свои данные на <br /> этой странице и нажмите <br /> далее.
            </span>
            </p>
        </div>
        <div className="contact_info">
          <div className="info_container">

            <label for="name" >Имя/Фамилия</label><br />
            <input name='name' type="text" /> <br />
            <label for="nik">Ник в Telegram</label> <br />
            <input name='nik' type="text" /><br />

          </div>
          <div className="info_container">
            <label for="email">Email</label> <br />
            <input name='email' type="email" /> <br />
            <label for="number">Телефон</label> <br />
            <input name='number' type="number" /><br />
          </div>
            <div className="info_git">
            <label for="git">Github</label> <br />
            <input name='git' type="text" />
            </div>
        </div>
    </div>
  )
}

export default Contact