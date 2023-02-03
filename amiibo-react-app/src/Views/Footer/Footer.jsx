import React from 'react';

export default function Footer(){

    return(
        <div className='px-5 py-20  
                        h-full 
                        grid grid-cols-1 md:grid-cols-3 gap-4
                        justify-between 
                        border-2 border-black
                        bg-gray-900
                        text-white
                        '>

 
                <About />

                <Contribute />
            
                <TechStack />
               

            
        </div>

    )
}

function About(){

    const oscar = <a className='text-link' href="https://cleveroscar.dev/" target="_blank" rel="noreferrer" >Oscar Ortiz</a>

    const navi = < a className='text-link' href="https://www.n3evin.com/" target="_blank" rel="noreferrer">Nevin Vu</a>

    return(
        <div>
            <p className='text-2xl underline mb-2'>About</p>
            <p>The front end of this application is supported by {oscar}, and the back-end of this application is supported by {navi}. </p>
        </div>
    )
}

function Contribute(){
    return(
        <div className='my-4 '>

            <div className='mb-2'>
                <p className='text-2xl underline mb-2'>Contribute</p>

                <p>Wanna Contribute? Feel free to check out the repo or reach out on twitter</p>
            </div>

            <div className='flex flex-row gap-4'>
                    
                <a href="https://github.com/CleverOscar/Amiibo_Guide"  target="_blank" rel="noreferrer">
                    <img alt="github logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png'  className='w-fit max-h-8' />   
                </a>

                <a href='https://twitter.com/CleverOscarDev' target="_blank" rel='noreferrer'>
                    <img alt="github logo" src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-white-circle-png-images-23.png'  className='w-fit max-h-8' />

                </a>
            </div>

        </div>
    )
}

function TechStack() {
    return(
        <div>
            <p className='text-2xl underline mb-2'>Tech Stack</p>

            <p className='mt-4'>
                    This Amiibo Application was developed using ReactJS and a few other dependencies. Check out the public GitHub repo if you'd like to learn more about the source code. 
            </p>
        </div>
    )
}