var tickInterval;
var walls = 0;
function tick()
{
    moveWall(); //move wall to the left
    moveCar();
}
function runSim(state) {
    tickInterval = setInterval("tick();", 200); //milisec.
}

function moveWall() {
    var getWallX = document.getElementById('wall').offsetLeft;
    
    if(getWallX <= 0)
    {
        //randomize wall position
        var randomWallYPos = Math.floor(Math.random() * (200 + 1) + 0);
        document.getElementById('wall').style.marginTop = randomWallYPos+"px";  
        
        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
        
        //walls++;//added this
        
    }else{
            getWallX = getWallX-20;
            document.getElementById('wall').style.left = getWallX+'px';
    }
    
    
    //getWallX = getWallX-20;
    //document.getElementById('wall').style.left = getWallX+'px';
}

function moveCar() {
    var getWallX = document.getElementById('wall').offsetLeft; 
    //left side of wall postion
    var getAIX = document.getElementById('sensor_2').offsetLeft+500; 
    // right side of sensor_2

    if(getWallX < getAIX) {
        var aiPos = document.getElementById('ai').offsetTop;
            aiPos = aiPos+1;        
            document.getElementById('ai').style.marginTop = aiPos+"px";
    }
}
