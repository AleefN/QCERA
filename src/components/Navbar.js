import React from "react";

const Navbar = () => {
    return(
        
          <nav className="nav">
            <a href = "/" className="web-title"></a>
            <ul>
                <li>
                    <a href = "/about">About</a>
                </li>
                <li>
                    <a href = "/review">Reviews</a>
                </li>
                <li>
                    <a href = "/post"> Post</a>
                </li>
            </ul>

          </nav>
    )
}

export default Navbar