import React from 'react';
import './about.css';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div id='about-page'>
      <div id="about-header">Meet the Developers</div>
      <div className="dev-container">
        <div className="dev-item">
          <div className="dev-name">Disnee Tamang</div>
          <div><img className="dev-pic" src="/images/disnee.png" /></div>
          <div>Disnee is a Berkeley, CA native who loves big cities and beaches. She went to college at UCSB and previously worked in tech sales.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/disneetamang/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/d-tamang" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </li>
            <li>
              <a href="https://angel.co/u/disnee-tamang" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Justin Nguyen</div>
          <div><img className="dev-pic" src="/images/justin.png" /></div>
          <div>Justin currently resides in Sacramento, CA and has a bachelor's in Applied Mathematics. In his free time, he enjoys dance, travel, and exploring new foods.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/justin-nguyen-dev/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/justinneyugn" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            </li>
            <li>
              <a href="https://angel.co/u/justin-nguyen-dev" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Kenneth Quach</div>
          <div><img className="dev-pic" src="/images/kenneth.png" /></div>
          <div>Kenneth is a SoCal native and has a bachelor's in Business Administration. When he's not coding, he enjoys surfing and napping.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/kennethquach/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/kenquack" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </li>
            <li>
              <a href="https://angel.co/u/kenneth-quach" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Phillip Lai</div>
          <div><img className="dev-pic" src="/images/phillip.png" /></div>
          <div>Phillip is a former engineer. He enjoys playing tennis and trying new foods.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/philliplai/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/pdlai" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            </li>
            <li>
              <a href="https://angel.co/u/phillip-lai-1" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;