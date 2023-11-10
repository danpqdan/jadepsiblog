import React, { useState } from 'react'
import '../styles/Home.css'

import { a, useSpring } from '@react-spring/web'

function Homeimg() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? .5 : 0,
        transform: `perspective(900px) rotateY(${flipped ? 180 : 0}deg)`,
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
            />
            <a.div  >

            </a.div >
        </div>
    )
}

export default Homeimg