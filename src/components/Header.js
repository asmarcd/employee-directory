import React from "react";
import "./style.css"

// This module controls the header at the top of the page

function Header() {

    return (
        <div className="Header" >
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">GeneriCo Employee Database</h1>
                        <p className="lead">Products for People</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;