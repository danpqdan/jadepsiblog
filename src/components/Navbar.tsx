import React from "react"
import "../styles/Navbar.css"

export function Navbar() {
    return (

        <div >
            <ul className='lista'>
                <li><a href="">Inicio</a></li>
                <li><a href="">Terapia</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </div>
    )
}


export default Navbar