import React, { useState } from 'react'
import '../styles/Home.css'

import { a, useSpring } from '@react-spring/web'

function Homeimg() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? .5 : 0,
        transform: `perspective(900px) rotateY(${flipped ? 360 : 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return (
        <div className={'container'} onClick={() => set(state => !state)}>
            <a.div
                className={`${'c'} ${'back'}`}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            />
            <a.div
                className={`${'c'} ${'front'}`}
                style={{
                    opacity,
                    transform,
                    rotateX: '0deg',
                }}
            >
                <span className='txtcont' >
                    <h1>GESTALT TERAPIA</h1>
                    <ul>
                        <h2>Seu Tempo!</h2>
                        <li>Monitoramento</li>
                        <li>Aprendizagem</li>
                        <li>Conhecimento</li>
                    </ul>

                    <div className='txtinf'>
                        <ul>
                            <li className='inf'>CRP: 00/000000</li>
                            <li className='inf'>Nome: Jade Rodrigues</li>
                        </ul>
                    </div>
                </span>
            </a.div>
        </div>
    )
}

export default Homeimg