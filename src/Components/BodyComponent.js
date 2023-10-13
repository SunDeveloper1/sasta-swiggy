import Card from './Card'

import { useEffect, useState } from 'react'
import SearchBar from "./SearchBar"
import Skeleton1 from "./Skeleton"
import useStatusOnline from '../utils/useStatusOnline'
import fs from 'fs'

const BodyComponent=()=>{

   //!- useState

    const [resturantlist,setResturantList]=useState([])
    const [filterReslist,setResFilterList]=useState([])
    const [searchText,setSearchText]=useState("")
    console.log(resturantlist)


    //!--getTopResturant based on Ratings

    const getTopResturant=()=>{
        newResturantlist=resturantlist.filter(resturant=>parseFloat(resturant.avgRating)>4)
        setResFilterList(newResturantlist)
    }

    // ^1.-- Every Time when the state changes or componet re-renders
    useEffect(()=>{
        console.log("useEffect Render with no dependics❌")
    })

    // ^2. After providing it DEPENDENCIES ARRAY it is called only first time
    useEffect(()=>{
            console.log("useEffect Render with dependics ✔️")
            fetchResturantsData()
        },[])
    
    // ^3, After providing it DEPENDENCIES which is assocaited with state changes

    useEffect(()=>{
        console.log("useEffect ResturantList change Render")
    },[resturantlist])

    console.log("-------------------MAIN RENDER------------")


    const fetchResturantsData = async()=>{

        let data=await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        let result=await data.json()
        console.log("---New Beginning---", result.data  )
      
        
        // console.log("new Data",result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        let dataNew=result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("---CardData----",result?.data)
        let dataNew1;
       if(dataNew != undefined)  dataNew1=dataNew.map(card=>card.info)
        console.log("DataNew",dataNew1)
        setResturantList(dataNew1)
        setResFilterList(dataNew1)

    }


//!-------Searches Resturant using search Text Function
const searchResturant=()=>{
    console.log("Resutatnlist",resturantlist)
    let filterResList=resturantlist.filter(resturstant=>(resturstant.name).toLocaleLowerCase().includes(searchText))
    setResFilterList(filterResList)
    
}

const removeAllFilterList=()=>{
    setResFilterList(resturantlist)
}

const onlineStatus=useStatusOnline();

if(onlineStatus == false){
    return(
        <h1> Looking Like You Are Offline 🚫</h1>
    )
}


    return(
        <>
        <div className="body">
        <div className="search-bar bg-slate-300  pb-6 flex items-center ">
            <input 
                className="search h-6 ml-5 mt-2 bg-slate-100 px-4 py-4 rounded-xl shadow-lg"
                type="text"
                placeholder="Search"
                onChange={(e)=>{
                    console.log(e.target.value)
                    setSearchText((e.target.value).toLocaleLowerCase())
                }}
              />
            <button  className="font-serif font-bold mt-3 mr-1 ml-1 text-xl" type="submit" onClick={searchResturant}>🔍</button>
            <button className="font-serif font-bold mt-2 text-xl" onClick={removeAllFilterList}>🔄️</button>
            <button className= "font-serif font-bold px-5  mt-2 ml-4 py-1 bg-teal-500 rounded-xl text-white shadow-md"onClick={getTopResturant}>Top Restraunt🍽️ </button>
        </div>
      
      
       
        
        
        <div className="container grid grid-cols-4 gap-3 justify-items-center mt-2">
           
            {
                filterReslist.length <0 ? <Skeleton1/>:

                filterReslist.map(index=>{
                    return(
                       <Card
                        key={index.id}
                        id={index.id} 
                        name={index.name} 
                        image={index.cloudinaryImageId}
                        deliveryTime={index.sla.deliveryTime}
                        ratings={parseFloat(index.avgRating)}
                        cuisines={index.cuisines.join(",")}
                        />  
                    )
                })
            }
        </div>
        </div>
        
        </>
    )
}





export  default BodyComponent