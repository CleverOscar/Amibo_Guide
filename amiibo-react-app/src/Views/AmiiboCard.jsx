import axios from 'axios';
import React, {useState} from 'react';

import AmiiboInfo from '../Model/AmiiboInfo';

export default function AmiiboCard() {

    const [data, setData] = useState([])

    function getAmiiboData() {
        axios.get("https://www.amiiboapi.com/api/amiibo?name=mario").then(res => setData(res.data.amiibo) ).catch(err => console.log(err))
    }

    return(
        <div>
            <div className='my-10 mx-auto text-center'>
                { data.length > 0 ? <AmiiboInfo data={data} /> : <div> Search A Amibo </div>}
            </div>
            


            <div className='mx-auto w-1/2'>
                <button type="button" onClick={getAmiiboData} className='bg-gray-900/20 p-2 rounded-lg hover:bg-gray-900/80 w-full' >
                    Fetch Amiibo Data
                </button>
            </div>
        </div>
    )
}