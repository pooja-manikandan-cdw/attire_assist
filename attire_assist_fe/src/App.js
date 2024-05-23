import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import Gender from './containers/Gender/Gender';
import Selection from './containers/Selection/Selection';
import Attiretype from './containers/Attiretype/Attiretype';

function App() {
  const [type, setType] = useState("image");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1)
  const handleNextClick = (num) => {
    setPage(num);
  }
  console.log('page', page)
  return (
    <div className="App">
      <Header />      
      
      {page===1?
      <Gender gender={gender} setGender={setGender} handleNextClick={handleNextClick}  />: 
      page===2? <Selection gender={gender} type={type} setType={setType} />:
      page ===3? <Attiretype /> : <></>}
      <div>

      </div>
    </div>
  );
}

export default App;
