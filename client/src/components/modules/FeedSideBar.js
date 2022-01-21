import React, { useState, useEffect } from "react";
import ProfileBox from "./ProfileBox.js"

const FeedSideBar = () => {
    return (
        <div className="u-feed-sidebar">
            <ProfileBox/>
            <div className="u-hidden-text">
                The profile/settings box will be implemented soon. 
            </div>
        </div>
    )
}

export default FeedSideBar