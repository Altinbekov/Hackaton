import React from 'react'
import '../css/About.css'
import three from '../images/three.png'
import four from '../images/four.png'

const About = () => {
  return (
    <div className='about'>
        <div className="hakaton-container">
            <h1>
                Первый хакатон <br /> в Узбекистане <br /> <span>где решают проблемы <br />бизнеса.</span>
            </h1>
        </div>
        <img className='moon' src={three} alt="" />
        <img className='mon' src={four} alt="" />
    </div>
  )
}

export default About