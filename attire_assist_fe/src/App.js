import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import Gender from './containers/Gender/Gender';
import Selection from './containers/Selection/Selection';
import Attiretype from './containers/Attiretype/Attiretype';
import FinalOutput from './containers/final-output/finalOutput';

function App() {
  const [type, setType] = useState("image");
  const [gender, setGender] = useState("man");
  const [attire,setAttire] = useState('');
  const [page, setPage] = useState(3);

  const handleNextClick = (num) => {
    setPage(num);
  }

  const handleAttireSelect = (attireType)=>{
    setPage(4);
    setAttire(attireType);
  }

  console.log('page', page)
  return (
    <div className="App">
      <Header />      
      
      {page===1?
      <Gender gender={gender} setGender={setGender} handleNextClick={handleNextClick}  />: 
      page===2? <Selection gender={gender} type={type} setType={setType} />:
      page ===3? <Attiretype gender={gender} handleAttireClick={handleAttireSelect}/> :
      page===4? <FinalOutput attire={attire} fit={attire}/> : <></>}
      <div>

      </div>
    </div>
  );
}

export default App;
