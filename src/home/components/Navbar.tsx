import React from "react"
import "../styles/Navbar.css"

export function Navbar() {
    return (

        <div >
            <ul className='lista'>
                <li><a>Home</a></li>
                <li><a href="">Terapia</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </div>
    )
}


export default Navbar