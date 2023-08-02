
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Hero } from './Hero';
import { Navigation} from './Navbar'
import { Skillset } from './Skillset';
import { Projects } from './Projects';
import { Contact } from './Contact';
function App() {

  return (
    <>
    <div>
     <Navigation/>
     <Hero/>
     <Skillset/>
    <Projects/>
    <Contact/>
     </div>
    </>
  )
}

export default App
