const canvas = document.getElementById('canvas1');
const ctx =  canvas.getContext('2d'); 
canvas.width = window.innerHeight; 
canvas.height = window.innerWidth; 
const particlesArray = []; 


//Helps to have drawings on all broswers 
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
})
const mouse = {
    x: null,
    y: null, 
}
//mouse function 
canvas.addEventListener('click', function(event){
    mouse.x = event.x; 
    mouse.y = event.y; 
})
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x; 
    mouse.y = event.y; 
    
})


class Particle
{
    constructor()
    {
       // this.x = mouse.x; 
       // this.y = mouse.y; 
        this.x = Math.random() * canvas.width; 
        this.y = Math.random() * canvas.height; 
        this.size = Math.random() * 5  + 1; 
        this.speedX = Math.random() * 3 -1.5; //horizontal 
        this.speedY = Math.random() * 3 -1.5; //vertical 
    }
    update()
    {
        this.x += this.speedX; 
        this.y += this.speedY; 
    }
    draw()
    {
        ctx.fillStyle = 'blue';  
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2); 
        ctx.fill(); 
    }   
}

function mp()
{
    for(let i = 0; i < 100; ++i)
    {
        particlesArray.push(new Particle()); 
    }
}

mp();  

function HP()
{
    for(let i = 0; i < particlesArray.length; ++i)
    {
        particlesArray[i].update(); 
        particlesArray[i].draw(); 
    }
}


function animate()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    HP(); 
    requestAnimationFrame(animate); 
}

animate(); 
