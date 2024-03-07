const Deals = (props)=>{
    return(
        <div className="deals">
            <img src="./courses.png"/>
            <div className="offers">
                <li>({props.discount}% off)</li>
                <li>Limited Offer</li>
            </div>
            <h3>{props.name}</h3>
            <p>{props.contain}</p>
            <div className="prices">
            <li className="price">${props.price}</li>
            <li className="previousprice">${props.previousPrice}</li>
            <li className="discount">({props.discount}% off)</li>
            </div>
            <button>View Deal</button>
        </div>
    )
}

export default Deals;