// import popper from "./popper"; 
// import typed from "./typed";
// import jquery from "./jquery";
// import jqueryMigrate from "./jqueryMigrate";
// import easing from "./easing";
// import wayPoints from "./wayPoints";
// import lightBox from "./lightBox";
// import bootStrap from "./bootstrap";
// import counterUp from "./counterup";
// import contactForm from "./contactForm";
// import owlCarousel from "./owlCarousel";
const mainScript = (callback) => {
    const script = document.createElement('script');
    script.src = '../js/main.js';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
}; 
const preloader = document.createElement('div');
preloader.id = 'preloader';

const cdnScripts =  () => {
     mainScript()
     //document.body.appendChild(preloader);
} 
export default cdnScripts;