import { Fragment } from 'react';
import Menu from "./components/menu.js";
import Portada from './components/portada';
import  Components  from './components/components';
import AboutUs from './img/about_us.jpg';


function App() {
  const tittle = "Abaut Us";
  const paragrapho1 = "Since 1997, we created the first gym in Bogota, Colombia. we wanted a space where we will can share our passion by sport with other people,  create stories of autosuperate, discipline and determinate.";
  const paragrapho2 = "Since this day, we have bring this vision arond the south american, helping to each person that need our sport space, giving suport in the differents areas for meet his best version. thank to the professionals in food, sport and medic, we can change the life of people and create one better socity.";
  return (
    <Fragment>
      <Menu/>
      <Portada/>
      <Components photo = {AboutUs} tittle = {tittle} paragrapho1 = {paragrapho1} paragrapho2 = {paragrapho2} />
    </Fragment>
  );
}

export default App;

