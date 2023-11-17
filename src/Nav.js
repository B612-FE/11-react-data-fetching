import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div className='nav'>
            <img
            className='nav_logo' 
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
            alt="Netflix logo"/>

            <img
            className='nav_avatar' 
            src=" https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
            alt="Netflix Avatar"/>
        </div>
    )
}

export default Nav
