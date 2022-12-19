import React from 'react';

export default function AmiiboInfo({data}) {
    
    let card = data.map(el => <div className='my-10 bg-gray-500/30 shadow-xl border-2 border-black rounded-lg px-2  mx-auto' key={el.tail}>


        <img src={el.image} alt={el.character} className="mx-auto drop-shadow-2xl my-8"/>
        <p className='text-center text-2xl font-jost underline'>{el.character}</p>
        

        
        <table className='mx-auto text-sm w-full text-left'>
            <thead>
                <tr className=''>
                    <th>Country</th>
                    <th>Release Date</th>
                    <th>Game</th>
                </tr>
            </thead>

           <tbody>
           <tr>
                <td>United States</td>
                <td>{el.release.na}</td>
                <td>{el.amiiboSeries}</td>
            </tr>

            <tr>
                <td>Japan</td>
                <td>{el.release.jp}</td>
            </tr>

            <tr>
                <td>
                    Europe
                </td>
                <td>
                    {el.release.eu}
                </td>
            </tr>

            <tr>
                <td>
                    Australia
                </td>
                <td>
                    {el.release.eu}
                </td>
            </tr>
           </tbody>
            
        </table>


    </div>)

    return(
        <div className='mx-4 md:mx-0'>
            {card}
        </div>
    )
}