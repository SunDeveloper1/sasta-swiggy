const Card=(props)=>{
    const id=props.id;
    return(
       
        <>
        <a style={{"textDecoration": "none"}} href={`/resturantDetails/${id}`}>
        <div className="card w-[200px] h-[280px]  shadow-zinc-200 shadow-2xl rounded-r-md hover:bg-gray-200">
            <img className="resturant-image " src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.image}`}/>
            <h4 className="font-serif font-bold text-black">{props.name}</h4>
            <div className="inner_card">
            <span className="font-mono font-semibold">{props.deliveryTime} ⌛</span>
            <span className="font-mono font-semibold">⭐{props.ratings}</span>
            <div className="break-words font-thin text-sm" id='cuisines'>😋{
                (props.cuisines).split(",").splice(0,5).toString() || (props.cuisines)
            
            } </div>
            </div>
            
        </div>
        </a>
        </>
    )
}

export default Card;