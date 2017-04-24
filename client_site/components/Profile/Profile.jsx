import React from "react"

import "./Profile.less"

const Profile=(props)=>{

    return(
        <div className='Profile'>
            {console.log('smth')}
                  <h1>Hi i am your profile</h1> 
                  {props.children}
            </div>
    )
}

export default Profile