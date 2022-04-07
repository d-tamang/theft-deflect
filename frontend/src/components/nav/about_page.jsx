import React from 'react';
import './about.css';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div>
      <div id="about-header">Meet the Developers</div>
      <div className="dev-container">
        <div className="dev-item">
          <div className="dev-name">Disnee Tamang</div>
          <div><img className="dev-pic" src="/images/disnee2.png" /></div>
          <div>Disnee is a Bay Area native and worked in tech sales post college. Her favorite past time is hanging out with her two chihuahua-terrior dogs.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/disneetamang/"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/d-tamang"><FaGithub /></a>
            </li>
            <li>
              <a href=""><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Justin Nguyen</div>
          <div><img className="dev-pic" src="/images/justin2.png" /></div>
          <ul className='social-media'>
            <li>
              <a href="www.linkedin.com/in/justin-nguyen-b851461b2"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/justinneyugn"><FaGithub/></a>
            </li>
            <li>
              <a href=""><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Kenneth Quach</div>
          <div><img className="dev-pic" src="/images/kenneth2.png" /></div>
          <div>Kenneth is a Southern California native with a bachelor's degree in Business Administration. His hobbies include surfing and reading.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/kennethquach/"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/kenquack"><FaGithub /></a>
            </li>
            <li>
              <a href=""><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Phillip Lai</div>
          <div><img className="dev-pic" src="/images/phillip2.png" /></div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/philliplai/"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/pdlai"><FaGithub/></a>
            </li>
            <li>
              <a href=""><FaAngellist /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;