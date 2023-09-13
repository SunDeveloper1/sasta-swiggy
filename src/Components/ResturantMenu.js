//!--For Getting Parameter detials we will use useParam Hook

import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";


async function getResturantDatabyId(id){
    const response = await fetch(URL);
    let data = await response.json();
    // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    data=data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    return data;
}

const URL='https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=26723'

const ResturantMenu=()=>{
    
    let [res, setRes]=useState([])


    useEffect(()=>{
      getResturantDatabyId().then((result)=>{
                console.log(result);
                setRes(data)
      }).catch(error=>{
        console.log(error);
      });
      
    },[])

    const params=useParams();
    console.log(params);
    return(
            <>
            <h1>Resturant ID:123</h1>
            <h2>Vivek Resturant</h2>
            </>
        )
}


export default ResturantMenu;