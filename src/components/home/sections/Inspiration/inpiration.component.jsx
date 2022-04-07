import React from 'react'

const Inspiration = () => {
    return(
        <div className="section-container section-half-background-image-container">
        <div className="image-column" style={{boxShadow: '10px 10px 80px #5b5555',backgroundImage: 'url("./assets/images/img-01.jpg")'}} />
        <div className="container">
          <div className="row">
          <div className="section-label reveal" data-sr-id={2} style={{visibility: 'visible', WebkitTransform: 'translateY(0) scale(1)', opacity: 1, transform: 'translateY(0) scale(1)', WebkitTransition: '-webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s', transition: 'transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s'}}>
          <p >Projecten</p>
        </div>
            <div className="col-md-6 col-md-offset-6 text-column">
              <h2>Wat ons inspireert?</h2>
              <h3 />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor. Phasellus ut
                lacus tellus. In pretium lobortis blandit. Nam eu laoreet velit. Vivamus laoreet, sem nec scelerisque
                elementum, dui augue aliquet urna, ut bibendum purus erat ut massa. Mauris diam orci, feugiat a turpis
                et, congue accumsan risus. Nulla malesuada leo sodales, auctor augue quis, condimentum lacus. Phasellus
                sed sollicitudin quam, a bibendum urna.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor. Phasellus «
                ut lacus » tellus. In pretium lobortis blandit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor. Phasellus ut
                lacus tellus. In pretium lobortis blandit.</p>
            </div>
          </div>
        </div>
      </div>
      
    
    )
}

export default Inspiration;