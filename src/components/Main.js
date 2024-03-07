import MainHead from "./MainHead";
import MainContainer from "./MainContainer";
import DealsContainer from "./DealsContainer";

const Main = ()=>{

    return(
        <div className="main">
            <MainHead/>
            <MainContainer/>
            <DealsContainer/>
        </div>
    )
}

export default Main;