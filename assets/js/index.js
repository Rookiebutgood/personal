const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let t = 0

function flower(t) {
    let text = 'Holy Jesus! What is that? What the fuck is that?'
    let i = 0
    let mtr = 0
    while(i < text.length + 1 ) {
      ctx.save()
      ctx.translate(400, 300)
      ctx.rotate(6 * i)
      ctx.scale(0.5*t, 0.5*t)
      i++
      ctx.fillStyle = 'white'
      ctx.font = '40px serif';
      ctx.fillText(text, 10, 50);
      ctx.restore()
  } 
}

function render() {
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    if(t>80) {
        t=0
    }
    if(t+0.5 > 1) {
        flower(t)
    }
  t+=0.5
  window.requestAnimationFrame(render)
}

render()