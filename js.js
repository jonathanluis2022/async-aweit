function gol(max, min) {
    max = 500;
    min = 0; // auqi fizemos um aleatorio
    return Math.floor(Math.random() * (max + min) - min)
}

function golaço(msg = 'golaçoo', gol) {
    return new Promise((resolve, reject) => { //uma promessa que vai resover ou rejeitado 
        setTimeout(() => { //vai ter um tempo para execultar
            if (typeof msg !== 'string') return reject('para fora ') //si for diferente de string ja vai reject
            resolve(msg)
        }, gol)

    })

}

async function correAbraço() {
    try {
        const foiGol = await golaço('golaçosss', gol(5, 3))
        console.log(foiGol)

    } catch {
        console.log('chutou para fora ')
    }
}

correAbraço();