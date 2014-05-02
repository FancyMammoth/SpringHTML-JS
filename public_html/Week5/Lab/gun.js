var bullets = 20;
var ingun = 6;
var maxingun = 6;
var shoot = document.getElementById("shoot");
var reload;
var mp3;
var dispBullets; 
var dispInGun;
var difference;


reload = document.getElementById("reload");
//mp3 = document.getElementById("gunshot");
dispBullets = document.getElementById("ammoleft");
dispInGun = document.getElementById("ingun");



shoot.onclick = function fire()
{
    console.log("click!");
    
    if(ingun > 0)
    {
        ingun --;
        dispInGun.innerHTML = ingun;
        //document.getElementById("gunshot").play();
        playshot();
    }
    
    else
    {
        alert("You have no bullets left in your gun try reloading!");
    }
    
};
    

function playshot()
{
    document.getElementById("gunshot").play;
    
}


reload.onclick = function reload()
{
    if(ingun < 6 && bullets > 0)
    {
        difference = maxingun - ingun;
        ingun += difference;
        bullets -= difference;
        dispBullets.innerHTML = bullets;
        dispInGun.innerHTML = ingun;
        
        
    }
    
    else if(ingun === 6)
    {
        alert("You already have 6 bullets in your gun!");
        
    }
    
    else
    {
        alert("Unfortunately it looks like your out of bullets! :(");
    }
};