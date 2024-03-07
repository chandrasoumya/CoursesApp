import { useState } from "react";

const MainHead = () => {
    const [selectedOption,setSelectedOption] = useState("Most Relevent")

    const handleDropdown = (e)=>{
        setSelectedOption(e.target.value);
    }

    return (
        <div className="mainhead">
            <h1>
                Best Website builders in the US
            </h1>
            <div className="updates">
                <div>
                    <img src="./tick.png" />
                    <p>Last Update - February 22,2020</p>
                </div>
                <div>
                    <img src="./report.png" />
                    <p>Advertising Disclosure</p>
                </div>
                <div className="dropdown">
                    <select id="dropdown" value={selectedOption} onChange={handleDropdown}>
                        <option value="Most Relevent">Most relevent</option>
                        <option value="Most Popular">Most Popular</option>
                        <option value="Latest">Latest</option>
                    </select>
                </div>
            </div>
            <div className="tags">
                <li>Tools</li>
                <li>AWS Builder</li>
                <li>Start Build</li>
                <li>Build Supplies</li>
                <li>Tooling</li>
                <li>Tools</li>
                <li>Blue hosting</li>
            </div>
            <div className="path">
                <p>Home &gt; Hostion for all &gt; Host </p>
            </div>
        </div>
    )
}

export default MainHead;