import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import ProfileItem from "./ProfileItem"

const ProfileBox = () => {
    const [userParams, setUserParams] = useState()
    useEffect(()=>{
        console.log( userParams)
    }, [userParams])
    useEffect(()=>{
        get("/api/userparams").then(
            (storedParams) => setUserParams(storedParams)
        )
    }, [])
    
    return (<div>
        <ul>
         {/* {userParams.map((item) => (
          <ProfileItem
            prompt={item.prompt}
            value={item.value}
          />
        ))}  */}
      </ul>
    </div>
        
    )
}

export default ProfileBox
