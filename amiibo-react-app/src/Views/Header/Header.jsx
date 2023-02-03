import React from 'react';

export default function Header(){
    return(
        <div className="flex flex-wrap flex-row 
                        items-center 
                        mx-auto 
                        justify-center 
                        shadow-xl 
                        border-b 
                        border-gray-900/20 
                        w-full 
                        py-2">

        <a href="/" >
            <img  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Amiibo_logo.png" 
                  alt="amiibo logo" 
                  className="max-w-xs"
                />
        </a>

        <p className="text-5xl font-jost"> React App </p>

        </div>
    )
}