import React, { useEffect, useState } from 'react'

function useStatusOnline() {
    let[onlineStatus ,setOnlineStatus] =useState(true);

    useEffect(()=>{
        
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
        })

        window.addEventListener("online", ()=>{
            setOnlineStatus(true)
        })
    },[])

    return onlineStatus

}

export default useStatusOnline