import React ,{useState,useEffect} from 'react';
import { MENU_URL } from './constants';

function useResturantMenu(id) {
    const [resInfo,setResInfo]=useState(null);
    const [menuList,setmenuList]=useState(null);
    const [catgoryList,setCategoryList]=useState(null)

    useEffect(()=>{
        getResDataByID(id)
    },[])


    async function getResDataByID(id){
        const response=await fetch(MENU_URL+id)
        let data = await response.json();
        let filter_data=null
        if(data.data.cards.length > 0){
        if(data?.data?.cards[0]?.card?.card?.info  !=undefined){
            filter_data=data?.data?.cards[0]?.card?.card?.info

        }
        }
        const menuList=data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

        if(menuList != undefined || menuList != null){

            let newMenuList=menuList.map(menu=>{
                if(menu.card.card.itemCards){
                    let itemCards=menu.card.card.itemCards;
                    let newArray=itemCards.map(item=>{
                        let element=item.card.info
                        return{
                            id:element.id,
                            name:element.name,
                            category:element.category,
                            description:element.description,
                            imageId:element.imageId,
                            price:element.price,

                        }
                    })
                    return newArray
                }
            })

            newMenuList=newMenuList.filter(menu=> menu != undefined)
            let finalArray=[];
         
            console.log("finalArray", finalArray)
            console.log("newMenuList",newMenuList.flat().slice(0,9))
            console.log(newMenuList?.length)
            setmenuList(newMenuList.flat())
        }

        const catList=data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => card.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        console.log("catList", catList)
        if(catList && catList.length >0) setCategoryList(catList)


        setResInfo(filter_data)
    }


    return [resInfo, menuList,catgoryList];
  

}

export default useResturantMenu