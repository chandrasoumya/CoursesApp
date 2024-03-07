import Courses from "./Courses";

const MainContainer = ()=>{
    const allCourses = [
        {
            Number:1,
            Name:"Built",
            Title:"WixPro 72-Inch Responsive Website Builder",
            Contain:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            Highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            Bestchoice:true,
            Bestseller:false,
            Rating:7.5,
            Performance:"Good"
        },
        {
            Number:1,
            Name:"Built",
            Title:"WixPro 72-Inch Responsive Website Builder",
            Contain:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            Highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            Bestchoice:true,
            Bestseller:false,
            Rating:7.5,
            Performance:"Good"
        },
        {
            Number:1,
            Name:"Built",
            Title:"WixPro 72-Inch Responsive Website Builder",
            Contain:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            Highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            Bestchoice:false,
            Bestseller:false,
            Rating:7.5,
            Performance:"Good"
        },
        {
            Number:1,
            Name:"Built",
            Title:"WixPro 72-Inch Responsive Website Builder",
            Contain:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            Highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            Bestchoice:false,
            Bestseller:false,
            Rating:7.5,
            Performance:"Good"
        }
    ]

    return(
        <div className="maincontainer">
            {allCourses.map(e=>(
                <Courses title={e.Title} contain={e.Contain} highlight={e.Highlight} rating={e.Rating} performance={e.Performance} number={e.Number} name={e.Name}/>
            ))}
        </div>
    )
}

export default MainContainer;