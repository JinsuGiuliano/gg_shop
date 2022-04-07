import React, {Component} from 'react'
import Menu from '../sections/menu/menu.component'
import Hero from '../sections/hero/hero.component';
import MisionVision from '../sections/Mision&Vision/misionVision.component';
import Inspiration from '../sections/Inspiration/inpiration.component';
import Contact from '../sections/contact/contact.component';
import Footer from '../sections/footer/footer.component';
import Directory from '../directory/directory.component.jsx';
import FloatingWhatsApp from 'react-floating-whatsapp';
import "../sections/main.97292821.css";


class MainHome extends Component {

      render (){
        return(
        <div>  
          <Menu/>
          <Hero/>
          <MisionVision/>
          <Inspiration/>
          <Directory/>
          <Contact/>
          <Footer/>
          <FloatingWhatsApp
            phoneNumber="123456789"
            avatar='assets/images/logo-swn.png'
            accountName="SWN"
            allowClickAway
            notification
            notificationDelay={60000} // 1 minute
            styles={{zIndex:'99999999'}}
          />
        </div>
        );
      }
}

export default MainHome;