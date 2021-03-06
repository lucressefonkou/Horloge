setInterval(horloge, 100)

function horloge(){

    let now = new Date ()
    let hr = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    //Format 12 heures
    hr = hr>=12? hr-12:hr
    //On va chercher le canvas
    const ctx = document.querySelector("#horloge").getContext("2d")
    ctx.save()
    ctx.clearRect(0,0,500,500)

    // On definit les couleurs
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 8

    // On definit le centre de l'horloge
    ctx.translate(250,250)

    // Il faut definir le 0 en haut
    ctx.rotate(-Math.PI/2)

    // Marquage des heures
    ctx.save()
    for(let heure = 0; heure<12; heure++){
        ctx.beginPath()
        ctx.rotate(Math.PI / 6)
        ctx.moveTo(100,0)
        ctx.lineTo(120,0)
        ctx.stroke()
    }
    ctx.restore

    // Marquage des minutes
    // On change la taille du trait
    ctx.lineWidth = 5
    ctx.save()
    for(let minute = 0; minute<60; minute++){
        if (minute%5 != 0){
            ctx.beginPath()
            ctx.moveTo(110,0)
            ctx.lineTo(120,0)
            ctx.stroke()
        }
        ctx.rotate(Math.PI/30)
    }
    ctx.restore()

    // Positionner l'aiguille des heures
    ctx.strokeStyle = "#007cba"
    ctx.lineWidth = 14

    // On fait tourner l'aiguille de l'angle correspondant a l'heure qu'il est
    ctx.save()
    ctx.rotate(hr*(Math.PI/6)+min*(Math.PI/360)+sec*(Math.PI/21600))
    ctx.beginPath()
    ctx.moveTo(-20,0)
    ctx.lineTo(80,0)
    ctx.stroke()
    ctx.restore()

    // Aiguille des minutes
    ctx.lineWidth=10
    ctx.save()
    ctx.rotate(min*(Math.PI/30)+sec*(Math.PI/1800))
    ctx.beginPath()
    ctx.moveTo(-28,0)
    ctx.lineTo(112,0)
    ctx.stroke()
    ctx.restore()

    // Aiguille des secondes
    ctx.strokeStyle = "#ff0366"
    ctx.fillStyle = "#ff0366"
    ctx.lineWidth = 6
    ctx.save()
    ctx.rotate(sec*(Math.PI/30))
    ctx.beginPath()
    ctx.moveTo(-30,0)
    ctx.lineTo(83,0)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0,0,10,0,Math.PI*2,true)
    ctx.fill()
    ctx.restore()

    // Cercle
    ctx.strokeStyle = "#fed800"
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.arc (0,0,142,0,Math.PI*2,true)
    ctx.stroke()

    ctx.restore()

}
