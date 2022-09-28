import React,{useState,useEffect,useCallback} from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar';
import FullWidthGrid from './components/Card';
import InputWithIcon from './components/Search';
import StickyHeadTable from './components/CountryWiseData'


function App() {
  const [Country,setCountry]=React.useState("Pakistan");
  
 useEffect(() => {
  console.log("this is COuntry from app", Country);
      }, [Country])

  return (
    <>
    

      <ButtonAppBar/>
      {/* <FullWidthGrid Country={Country}/> */}
       <InputWithIcon/>
    {/* <StickyHeadTable/> */}

   
    </>
  

  );
}

export default App;
