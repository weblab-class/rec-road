import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import ProfileItem from "./ProfileItem"

/**
 * ProfileBox is a box in the left sidebar that lists the settings options that you can toggle
 *
 * No props
 *                       
 */

const ProfileBox = () => {
    // const [userParams, setUserParams] = useState()
    // useEffect(()=>{
    // }, [userParams])
    // useEffect(()=>{
    //     get("/api/userparams").then(
    //         (storedParams) => setUserParams(storedParams)
    //     )
    // }, [])
    
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
