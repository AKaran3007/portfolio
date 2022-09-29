import React from 'react';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Skillcontainer from './Components/SkillContainer/Skillcontainer';
import Topcontainer from './Components/Topcontainer/Topcontainer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Newpro from './Components/Newpro/Newpro';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Topcontainer></Topcontainer>
      <Skillcontainer></Skillcontainer>
      <Newpro></Newpro>
      <Contact></Contact>
      
      
     
      
    </div>
  )
}

export default App