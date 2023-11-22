import React from 'react'
import { CiHeadphones } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

import '../styles/Sobre.css'

function Sobre() {
    return (
        <div>
            <h2>Viver em função de uma aprovação externa é muito delicado, uma vez que as
                pessoas aos nosso redor pensam e agem de formas completamente diferente
                umas das outras, tentar corresponder a todas essas expectativas é como
                nadar, nadar e morrer na praia, já que estaremos constantemente mudando
                nossa forma de agir e deixando de seguir o nosso próprio desejo para
                de acordo com aquilo que "esperam" de mim. A consequência disso é que
                eu vivo em constante frustação já que é absolutamente impossível
                agradar a todos, no fim o maior prejudicado é sempre você.
                Afinal, "Quem precisa que os outros lhe deem incentivos, elogios
                e tapinha nas costas, faz dos outros seus juízes" Fritz Perls. 😉
                Salve esse post para você sempre se lembrar de não se importar
                com os outros e sim com você.</h2>

            <div className='buttons'>

                <button className='btncontato'>
                    <div className='iconcontato'><CiHeadphones /></div>
                    <p>Contato</p>
                </button>
                <button className='btncontato'>
                    <div className='iconcontato'><FaWhatsapp /></div>
                    <p>WhatsApp</p>
                </button>
                <button className='btncontato'>
                    <div className='iconcontato'><FiInstagram /></div>
                    <p>Instagram</p>
                </button>
            </div>

        </div>
    )
}

export default Sobre