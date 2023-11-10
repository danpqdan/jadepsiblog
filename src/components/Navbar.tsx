import React, { PureComponent } from 'react'
import "../styles/Navbar.css"

export class Navbar extends PureComponent {
    render() {
        return (

            <div >
                <ul className='lista'>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Terapia</li>
                </ul>
            </div>
        )
    }
}

export default Navbar