import React from 'react'

function MobileNav() {
    return (
        <>
                <div className="nav d-flex  d-md-none mobile-nav">
                <ul  className="d-flex justify-content-between cd">
                    <li className="item"><a href="#skills">Skills </a></li>
                    <li className=" item"><a href="#project">Projects </a></li>
                    <li className="item"><a href="#home">Home </a></li>
                    <li className="item"><a href="#aboutus">About </a></li>
                    <li className="item"><a href="#contactus">Contact </a></li>
    
                </ul>
            
                
            </div>
        </>
    )
}

export default MobileNav
