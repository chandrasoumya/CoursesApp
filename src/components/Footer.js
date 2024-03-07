import { useState } from "react";
const Footer = ()=>{
    const [selectedOption,setSelectedOption] = useState("Most Relevent")

    const handleDropdown = (e)=>{
        setSelectedOption(e.target.value);
    }
    return(
        <div className="footer">
            <div>
                <h3>CATEGORIES</h3>
                <li>Web builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Automation</li>
            </div>
            <div>
                <h3>CONTACT</h3>
                <li>Contact</li>
                <li>Privacy Policy </li>
                <li>Terms of Services</li>
                <li>Categories</li>
                <li>About</li>
            </div>
            <div>
                    <select id="dropdown" value={selectedOption} onChange={handleDropdown}>
                        <option value="United States">United States</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
            </div>
        </div>
    )
}

export default Footer;