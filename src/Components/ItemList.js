import React from 'react'
import  { IMG_URL }  from "../utils/constants"
function ItemList(props) {
    console.log("props", props)
    const {itemCards} =props
  return (
    <>
    <div className='main'>
        {
            itemCards.map((card) =>{
                return(
                    <div className='card border-b-2 text-sm pt-2 pb-2 flex justify-between'>
                        <div className='w-9/12'>
                        <div className='flex font-bold'>
                        <span>{card.card.info.name}</span>
                        <span> -₹{card.card.info.price? card?.card?.info?.price/100:card?.card?.info?.defaultPrice/100} </span>
                        </div>
                        <div>
                        <span className='text-xs'>{card.card.info.description}</span>
                        </div>
                        </div>
                        <div className='imgContainer w-3/12 h-auto'>
                            <button className='absolute font-bold text-white bg-black opacity-70 px-2'>Add</button>
                            <img src={IMG_URL+card.card.info.imageId}/>
                        </div>
                        
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ItemList