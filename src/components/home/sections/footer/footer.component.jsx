import React from 'react'

const Footer = () => {
    return(
        <footer className="footer-container white-text-container px-5">
        <div className="container">
          <div className="row px-3">
            <div className="col-md-4">
              <h4>About us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor</p>
            </div>
            <div className="col-md-4">
              <h4>Do you like ? Share this !</h4>
              <div>
                <p>
                  <a href="https://www.twitter.com" className="fa-icon" title="">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="https://www.facebook.com" className="fa-icon" title="">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="https://www.linkedin.com" className="fa-icon" title="">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </p>
              </div>
              <div>
                <p><small>© Untitled | Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></small></p>
              </div>
            </div>
            <div className="col-md-4">
              <h4>Subscribe to newsletter</h4>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control footer-input-text" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-primary btn-newsletter ">OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      
    )
}

export default Footer;