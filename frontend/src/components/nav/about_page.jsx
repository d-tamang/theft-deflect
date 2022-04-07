import React from 'react';
import './about.css';

const AboutPage = () => {
  return (
    <div>
      <div id="about-header">Meet the Developers</div>
      <div className="dev-container">
        <div className="dev-item">
          <div className="dev-name">Disnee Tamang</div>
          <div><img className="dev-pic" src="/images/disnee2.png" /></div>
          <div>Disnee is a Bay Area native and worked in tech sales post college. Her favorite past time is hanging out with her two chihuahua-terrior dogs.</div>
        </div>
        <div className="dev-description">
          <div className="dev-name">Justin Nguyen</div>
          <div><img className="dev-pic" src="/images/justin2.png" /></div>
        </div>
        <div className="dev-description">
          <div className="dev-name">Kenneth Quach</div>
          <div><img className="dev-pic" src="/images/kenneth2.png" /></div>
        </div>
        <div className="dev-description">
          <div className="dev-name">Phillip Lai</div>
          <div><img className="dev-pic" src="/images/phillip2.png" /></div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;