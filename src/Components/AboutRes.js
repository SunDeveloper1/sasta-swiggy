import React ,{useState , useEffect}from "react";
import { useParams } from "react-router-dom";
 import Skeleton1 from "./Skeleton";
import {MENU_URL} from "../utils/constants"
import useResturantMenu from '../utils/useResturantMenu'
import ItemList from './ItemList';
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";



const AboutRes=(props)=>{
    const params=useParams();
    const id=params.id;

    const [resDeatils, menuList,categoryList]=useResturantMenu(id);
    const [isVisible,setisVisible]=useState(false)
    const [showIndex,setShowIndex]=useState(null)

    if(resDeatils == null) return <Shimmer/>

    const handleClick=()=>{
        setisVisible(!isVisible)

    }

    const renderResDetails=(resDeatils)=>{
        return(
            <>
            <div className="main-res text-center">
                <h1 className="btnHead">{resDeatils.name}</h1>
                {/* <h1 className="btn">Id:- {resDeatils.id}</h1>
                <h3 className="btn">City:- {resDeatils.city}</h3>
                <h4 className="btn">Average Rating:- {resDeatils.avgRating}</h4>
                <h4 className="btn">Cuisines :- {resDeatils.cuisines.toString()}</h4> */}
            </div>
            </>
        )
    }
    
    const renderAllMenu=(menuList)=>{
        return(
            <>
            <div className="all-menu text-center">
            {
                menuList.map((menu)=>{
                    return <li>{menu.name}</li>
                })
            }
            </div>
          
            </>
        )
    }

    const renderCategories=(categoryList)=>{
       
        console.log("catList", categoryList)
        return(
            <>
                <div className="category-menu  w-6/12 m-auto">
                  {
                    categoryList.map((category,index)=>{
                        return (
                            <>
                            <ResCategory category={category} index={index} isVisible={index == showIndex ? true :false } indexFunction={(index)=>{setShowIndex(index); console.log(index)}}/>
                            
                            </>
                        )
                    })
                  }
                </div>
            </>
        )
    }

    

    

   
    return(
        <>

        <div classname="about Res w-1/2  grid grid-cols-2 h-80 m-auto flex-col align-middle items-center">
            {renderResDetails(resDeatils)}
            {renderCategories(categoryList)}
            

     
        </div>

        </>
    )
}



export default AboutRes;