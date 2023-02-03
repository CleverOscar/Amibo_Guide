import React from 'react';

export default function AmiiboInfo({data}) {
    
    

    return(
        <div className='mx-auto w-full md:mx-0 md:flex md:flex-col'>
            <div className='my-10 bg-gray-500/30 shadow-xl border-2 border-black rounded-lg p-4  mx-auto transition ease-in-out hover:scale-110 duration-300 ' key={data.tail}>


                <img src={data.image} alt={data.character} className="mx-auto w-auto drop-shadow-2xl  max-h-56"/>
                <p className='text-center text-2xl font-jost underline'>{data.character}</p>



                <table className='mx-auto text-sm w-full text-left'>
                    <thead>
                        <tr className=''>
                            <th>Country</th>
                            <th>Release Date</th>
                            <th>Game</th>
                        </tr>
                    </thead>

                <tbody className='font-semibold'>
                <tr>
                        <td>United States</td>
                        <td>{data.release.na}</td>
                        <td>{data.amiiboSeries}</td>
                    </tr>

                    <tr>
                        <td>Japan</td>
                        <td>{data.release.jp}</td>
                    </tr>

                    <tr>
                        <td>
                            Europe
                        </td>
                        <td>
                            {data.release.eu}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Australia
                        </td>
                        <td>
                            {data.release.eu}
                        </td>
                    </tr>
                </tbody>
                    
                </table>


            </div>
        </div>
    )
}