import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Pagination from './Pagination/Pagination';

import About from '../About/About';

import AmiiboInfo from './AmiiboInfo';

export default function AmiiboCard({data}) {


    const [options, setOptions] = useState([
        {
            "label": "sort A-Z",
            "value": 'sort'
        },
        {
            "label": "release",
            "value": 'release'
        },
    ]);

    function handleChange(e){
        if(e.target.value === "sort"){
            console.log("Sort has been selected")
            e.preventDefault()
            sort()
            
        }
    }
    

    function sort(){
        data.sort(function (a,b){
            if (a.character < b.character) {
                return -1;
              }
              if (a.character > b.character) {
                return 1;
              }
              return 0;
        })
    }


    // function getAmiiboData() {
    //     axios.get("https://www.amiiboapi.com/api/amiibo").then(res => setData(res.data.amiibo) ).catch(err => console.log(err))
    // }

    // function alphabeticalOrder(){
        
    //    axios.get("https://www.amiiboapi.com/api/amiibo").then(res => setData(res.data.amiibo.sort(function (a,b){
    //         if (a.character < b.character) {
    //             return -1;
    //           }
    //           if (a.character > b.character) {
    //             return 1;
    //           }
    //           return 0;
    //     }))).catch(err => console.log(err))


    // }


    function sortByAlphabet(){
        return data.amiibo.sort(function (a,b){
            if (a.character < b.character) {
                return -1;
              }
              if (a.character > b.character) {
                return 1;
              }
              return 0;
        })
    }

    return(
        <div className='px-4 md:px-0'>

            <div className='mx-auto w-1/2 max-w-sm flex flex-col md:flex-row gap-5 '>
                
                { data.length > 0 ? 
                   
                    <>
                        
                        <select onChange={handleChange} className="bg-gray-600/50 px-2 py-3 items-center mx-auto">
                            <option selected disabled value> Change Filter</option>
                            {options.map(op => <option key={op.label} value={op.value}>{op.label}</option>)}
                        </select>
                    </>
                    :  
                    <>
                        <p className='text-center text-4xl mx-auto'>
                            Loading Amiibos 
                        </p>
                    </>
                
                }

            </div>

            <div className='my-10 mx-auto text-center '>
                { data.length > 0 ? <Pagination  data={data} RenderComponent={AmiiboInfo} pageLimit={5} dataLimit={10} /> : <></>}
            </div>
        </div>
    )
}