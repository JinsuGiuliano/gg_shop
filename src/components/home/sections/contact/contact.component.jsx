import React from 'react'
import { Columns } from './contact.styles';
const Contact = () => {
    return(

      <Columns>
                <div>
                  <img src='assets/images/logo-swn.png' alt='' width={'150px'}  />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+ 123 45 67 890</p>
                  <h3>E-mail</h3>
                  <p>hello@email.com</p>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>42 rue rouelle 75015, Paris</p>
                  <h3>Open hours</h3>
                  <p>Mon - Fri : 9AM - 5PM</p>
                </div>
        </Columns>
      
    )
}

export default Contact;