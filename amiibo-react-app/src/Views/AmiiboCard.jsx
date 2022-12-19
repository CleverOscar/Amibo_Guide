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


            <p>Amiibo Card</p>

            <div className='my-10'>
                { data.length > 0 ? <AmiiboInfo data={data} /> : <div> Search A Amibo </div>}
            </div>
            


            <button type="button" onClick={getAmiiboData} className='bg-gray-900/20 p-2 rounded-lg hover:bg-gray-900/80' >
                Fetch Amiibo Data
            </button>
        </div>
    )
}