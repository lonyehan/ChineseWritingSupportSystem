import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'

// var Size = RQuill.import('attributors/style/size');
// Quill.register(Size, true);
function MyEditor(){
  const [value, setValue] = useState('請在此輸入文字')
  // setState({value: '請在此輸入文字'})
  return(
    <ReactQuill theme='bubble' value={value} onChange={setValue}/>
  );
}
function MainPage(){
  return(
    <>
    <MyEditor className='Editor'/>
    <button>送出</button>
    <div className='Assistant'></div>
    </>
  );
}

// function TitleList(){
//   return(
//     <div className='titleList'>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      {/* <TitleList/> */}
      <MainPage className='mainPage'/>
    </div>
  );
}

export default App;
