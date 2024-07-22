import React, { useState } from "react";
import Link from "./Link";

function Header() {
    const [links, setLinks] = useState([
        {name: 'Home Page', id: 1 },
        {name: 'About page', id: 2 },
        {name: 'Contact us', id: 3 },
]);
   
return (
        <div className='header'>
            <h1>Logo</h1>

            {links.map(function (linkName){
                return <Link linkTitle = {linkName.name} key= {linkName.id} />
            })}
            </div>
    )
}

export default Header;