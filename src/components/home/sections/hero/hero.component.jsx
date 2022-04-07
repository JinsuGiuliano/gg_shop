import React from 'react'

const Hero = () => {
    return(
      <div className="background-image-container white-text-container" style={{backgroundImage: 'url("./assets/images/img-05.jpg")'}}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 >Vriendschappen bouwen, zorgen voor de wereld</h1>
            <p>Stichting Wereldvriendschap in nood </p>
            <a href="#contact-section-container" className="btn btn-primary btn-lg anchor-link" title="">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Hero;