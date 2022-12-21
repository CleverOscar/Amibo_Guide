import React from 'react';

export default function Footer(){
    return(
        <div className='py-10 text-center bg-gray-900/20 mt-10 h-full flex flex-col justify-between'>
            <div>
                <p>This App is maintained by <a className='text-blue-900 hover:text-blue-300' href="https://cleveroscar.dev/" target="_blank" >Oscar</a> </p>
            </div>
            
            <div className='flex flex-col w-10/12 mx-auto mt-4'>
                
                <div className='mb-4'>
                    <p>Wanna Contribute? Feel free to check out the repo or reach out on twitter</p>
                </div>
                <div className='flex flex-row justify-center gap-8'>
                    
                    <a href="https://github.com/CleverOscar/Amiibo_Guide" target="_blank" >
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png'  className='w-fit max-h-8' />   
                    </a>

                    <a href='https://twitter.com/CleverOscarDev' target="_blank">
                        <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-white-circle-png-images-23.png'  className='w-fit max-h-8' />

                    </a>
                </div>
            </div>

            
        </div>

    )
}

