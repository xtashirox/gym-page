import { Fragment } from 'react';
import Menu from "./components/menu.js";
import Portada from './components/portada';
import  Components  from './components/components';
import AboutUs from './img/about_us.jpg';
import Foto1 from "./img/foto1.jpg"
import Foto2 from "./img/foto2.jpg"
import Foto3 from "./img/foto3.jpg"
import Intro from './components/intro';
import Services from "./components/services"


function App() {
  const tittle = ["Abaut Us","Crossfit","bodybuilding area","Cardio Zone"];

  const paragrapho1 = "Since 1997, we created the first gym in Bogota, Colombia. we wanted a space where we will can share our passion by sport with other people,  create stories of autosuperate, discipline and determinate.";
  const paragrapho2 = "Since this day, we have bring this vision arond the south american, helping to each person that need our sport space, giving suport in the differents areas for meet his best version. thank to the professionals in food, sport and medic, we can change the life of people and create one better socity.";
  const cardiopagrapho = "A complete variety of cardio machines and equipment are available for you to train your heart while enjoying your favorite content on cable television or through the connection to your devices.";
  const muscle = "You can achieve the muscle tone you have always wanted to achieve with the advice of our trainers on modern assisted and free weight equipment in spacious and comfortable spaces.";
  const smart = "CrossFit gyms will make you better, whether you're new to working out or a longtime athlete. Putting in the work and making healthy choices is hard, but when you surround yourself with a supportive community of people who share your goals, it becomes a little bit easier — and a lot more fun.";
  return (
    <Fragment>
      <Menu/>
      <Portada/>
      <Components photo = {AboutUs} tittle = {tittle[0]} paragrapho1 = {paragrapho1} paragrapho2 = {paragrapho2} />
      <Intro/>
      <Components photo = {Foto1} tittle = {tittle[1]} paragrapho1 = {smart} />
      <Components photo = {Foto2} tittle = {tittle[2]} paragrapho1 = {muscle} />
      <Components photo = {Foto3} tittle = {tittle[3]} paragrapho1 = {cardiopagrapho} />
      <Services/>
      <footer>
        <p>All rights reserved.</p>
      </footer>

    </Fragment>
  );
}

export default App;

