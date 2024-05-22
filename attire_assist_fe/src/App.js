import './App.css';
import Header from './components/Header/Header';
import Label from './components/Label/Label';
import background from './assets/background-1.jpg'
import ImageUpload from './containers/ImageUpload/ImageUpload';
import { useState } from 'react';

function App() {
  const [type, setType] = useState("image");
  return (
    <div className="App">
      <Header />
      <h1>YOUR IMAGE CAN UNLEASH YOUR BEST ATTIRE</h1>
      {/* <Label label="Add your body measurements" /> */}
      {/* <div className='background'></div> */}
      {type === 'image' ? <ImageUpload setType={setType} /> : null}
      {type === 'size' ? <ImageUpload setType={setType} /> : null}
      {type === 'type' ? <ImageUpload setType={setType} /> : null}
      <div>

      </div>
    </div>
  );
}

export default App;
