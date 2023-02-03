import React, {useState, useEffect} from 'react';
import axios from 'axios'

import AmiiboCard from "./Views/Amiibo/AmiiboCard";
import Footer from "./Views/Footer/Footer";

import Header from './Views/Header/Header';


export default function AmiiboApp() {

  // our apps state
  const [amiiboData, setAmiiboData] = useState([]);
  // fetching our apps state
  useEffect(() => {
    axios.get("https://www.amiiboapi.com/api/amiibo").then(res => setAmiiboData(res.data.amiibo)).catch(err => console.log(err))
  },[])


  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <div className="container mx-auto my-auto py-10">
        
        <AmiiboCard data={amiiboData} />

      </div>
    

      <Footer />

    </div>
  );
}


