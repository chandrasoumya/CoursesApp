import Deals from "./Deals";
const DealsContainer = ()=>{
    const allDeals = [
        {
            Name:"Webbuilder 1",
            Contain:"Computer Modern clasic with wix support",
            Price:39.96,
            PreviousPrice:49.96,
            Discount:20
        },
        {
            Name:"Webbuilder 1",
            Contain:"Computer Modern clasic with wix support",
            Price:39.96,
            PreviousPrice:49.96,
            Discount:20
        },
        {
            Name:"Webbuilder 1",
            Contain:"Computer Modern clasic with wix support",
            Price:39.96,
            PreviousPrice:49.96,
            Discount:20
        }
    ]
    return(
        <div className="dealscontainer">
            <h1>Related deals you might like for</h1>
            <div className="alldeals">
            {allDeals.map(e=>(
                <Deals name={e.Name} contain={e.Contain} discount={e.Discount} price={e.Price} previousPrice={e.PreviousPrice}/>
            ))}
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default DealsContainer;