import Star from "./Star";

const Courses = (props) => {
    return (
        <div className="courses">
            <div className="courseimage">
                <p className="number">{props.number}</p>
                <img src="./courses.png" />
                <p className="name">{props.name}</p>
            </div>
            <div className="coursecontain">
                <p className="contain">
                    <span>
                        {props.title} - 
                    </span>
                     {props.contain}
                </p>
                <h3>
                    Main highlights
                </h3>
                <p className="highlights">
                    {props.highlight}
                </p>
            </div>
            <div className="courserating">
                <div className="rating">
                    <p className="rate">{props.rating}</p>
                    <p>{props.performance}</p>
                    <Star stars={props.rating}/>
                </div>
                <div className="buttonContainer">
                     <button>View</button>
            </div>
            </div>
        </div>
    )
}

export default Courses;