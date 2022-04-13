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
          <div><img className="dev-pic" src="/images/disnee2.png" /></div>
          <div>Disnee is originally from Albany, CA and enjoys long walks on the beach. She'll steal bites of your food after insisting she wasn't hungry.</div>
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
          <div>Justin currently resides in Sacramento and loves to dance. He'll steal your spotlight at the club, and your drink, when you're not looking.</div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/justin-nguyen-dev/"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/justinneyugn"><FaGithub/></a>
            </li>
            <li>
              <a href="https://angel.co/u/justin-nguyen-dev"><FaAngellist /></a>
            </li>
          </ul>
        </div>
        <div className="dev-item">
          <div className="dev-name">Kenneth Quach</div>
          <div><img className="dev-pic" src="/images/kenneth2.png" /></div>
          <div>Kenneth is a SoCal native who loves cats and anime. He'll steal your girl and your heart.</div>
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
          <div>Phillip is from Oxnard, CA but likes to claim Los Angeles. As a former engineer, he'll steal your identity and your savings.</div>
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