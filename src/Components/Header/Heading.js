
import {useState} from "react"

import { LOGO_URL } from "../../utils/constants"
import LOGO from '../../assets/img/foodlogo.png'
import { Link } from"react-router-dom"
import useStatusOnline from "../../utils/useStatusOnline"
// import  { Link } from "react-router-dom"

const Heading=()=>{
    
    let [isLoggedIn,setIsLoggedIn]=useState(false)
    let onlineStatus=useStatusOnline();

    return(
        <>
        <div className='header flex justify-between items-center shadow-lg '>
            <img className='logo h-24 ' alt='produc-logo' src={LOGO}/>
            <div className="nav-items p-4 flex justify-around">
                <ul className="flex items-center">
                    <span className="mr-6 font-serif font-bold bg-slate-200 px-3 py-2 rounded-2xl" > Online Status  {onlineStatus ? "🟢":"🚫"}</span>
                    <div className="flex items-center bg-violet-400 font-serif px-3 py-1  rounded-xl  text-yellow-300 font-bold shadow-lg">
                    <Link to='/home' className="mr-1 ml-1">Home </Link>
                    <Link to='/about' className="mr-1 ml-1">About</Link>
                    <Link to='/myprofile' className="mr-1 ml-1">Cart</Link>
                    <Link to='/myprofile' className="mr-1 ml-1">Requests</Link>
                    <Link to='/myprofile' className="mr-1 ml-1">Profile</Link>
                    </div>
                    
                  
        
                    
                </ul>
                
            </div>
            { (isLoggedIn) ? 
                (
                <button className="font-sans font-bold  mr-5" onClick={()=>setIsLoggedIn(false)}>Sign Out❌</button>
                ):
                (
                <button className="font-sans font-bold  mr-5" onClick={()=>setIsLoggedIn(true)}>Sign In ✔️</button>
                )
            }
        </div>
        </>
    )

}

export default Heading

