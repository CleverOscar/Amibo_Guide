import axios from 'axios';
import React, {useState} from 'react';
import Pagination from './Pagination/Pagination';

import AmiiboInfo from './AmiiboInfo';

export default function AmiiboCard() {

    const [data, setData] = useState([])

    function getAmiiboData() {
        axios.get("https://www.amiiboapi.com/api/amiibo").then(res => setData(res.data.amiibo) ).catch(err => console.log(err))
    }

    function alphabeticalOrder(){
        setData(data.sort(function (a,b){
            if (a.character < b.character) {
                return -1;
              }
              if (a.character > b.character) {
                return 1;
              }
              return 0;
        }))
    }

    return(
        <div>
            <div className='my-10 mx-auto text-center '>
                { data.length > 0 ? <Pagination  data={data} RenderComponent={AmiiboInfo} pageLimit={5} dataLimit={10} /> : <div> Search A Amibo </div>}
            </div>
            
            <div className='mx-auto w-1/2 flex flex-row justify-between gap-5'>
                <button type="button" onClick={getAmiiboData} className='bg-gray-900/20 p-2 rounded-lg hover:bg-gray-900/80 w-full' >
                    Fetch Amiibo Data
                </button>

                <button className='w-full bg-green-100' onClick={ alphabeticalOrder} >
                    Sort By Alphabet
                </button>
            </div>
        </div>
    )
}