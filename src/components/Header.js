const Header = ()=>{
    return(
        <div className="header">
            <div className="searchbar">
            <input type="text"/>
            <img src="./searchIcon.png" />
            </div>
            <ul>
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's deals</li>
            </ul>
        </div>
    )
}

export default Header;