import React, { useEffect, useState } from 'react'

function EfectoDesencriptarTexto({ text, mLeftInicial = 180, transitionTime = 2, randCar, tickCambioLetra = 150 }) {
    
    const [marginLeft, setMarginLeft] = useState(mLeftInicial ? mLeftInicial : 0)
    const caracteresRandom = randCar ? randCar : ['❕', '💭', '.', '🗨', '.', '💬', '.', '.', '❔', '🗯', '❔', '💭', '❕']
    const [newText, setNewText] = useState('')
    // Para el randomIntFromInterval
    const min = 0
    const max = caracteresRandom.length - 1

    // Conseguir número random entre dos números
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        console.log(marginLeft, mLeftInicial);
        setMarginLeft(0)
        let contaCiclos = 0

        let myInterval = setInterval(() => {
            var tempText = ''
            var trozoPalabra = ''

            // montamos la porcion de titulo encriptado del ciclo
            for (let i = contaCiclos; i < text.length; i++) {
                let x = randomIntFromInterval(min, max)
                tempText = tempText + caracteresRandom[x]
            }
            // montamos la porción del titulo real
            for (let i = 0; i < contaCiclos; i++) {
                trozoPalabra = trozoPalabra + text[i]
            }
            // actualizamos la palabra que estamos mostrando
            setNewText(trozoPalabra + tempText)
            // incrementamos ciclo
            contaCiclos = contaCiclos + 1

            if (contaCiclos > text.length) {
                clearInterval(myInterval)
            }
        }, tickCambioLetra);

        return () => clearInterval(myInterval)

    }, [])

    return (
        <div>
            <h3 className='encryptClassH2' style={{
                margin: 'auto',
                marginTop: '50px',
                marginLeft: `${marginLeft}px`,
                transition: `margin ${transitionTime}s`,
                color: '#f87325',
                fontSize: '34px',
                textAlign: "center",
                
            }}>{newText}</h3>
        </div>
    )
}

export default EfectoDesencriptarTexto