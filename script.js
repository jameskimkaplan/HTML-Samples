var c = 0;

function tick()
{
    c++;
    document.getElementById('stepsDone').value = c;
    moveWall(); //move wall to the left
}

var tickInterval;

function runSim(state)
{
    if(state == '1')//run simulation
    {
        if(c > 100)
        {
            runSim('0'); //force stop
        }else{
                tickInterval = setInterval("tick();", 100);
             } 
    }else{
            //stop simulation
            clearInterval(tickInterval);
            c = 0;
            document.getElementById('stepsDone').value = c;
            document.getElementById('wall').style.left = null;
            document.getElementById('wall').style.right = '0px';
         }
}

function moveWall()
{
    var getWallX = document.getElementById('wall').offsetLeft;
    
    document.getElementById('debugTextarea').innerHTML +=  "["+c+"] Wall PosX: "+getWallX+"\n";
    document.getElementById('debugTextarea').scrollTop = document.getElementById('debugTextarea').scrollHeight;
    
    if(getWallX <= 0)
    {
        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
    }else{
            getWallX = getWallX-40;
            document.getElementById('wall').style.left = getWallX+'px';
    }
}    
function moveCar(direction)
{
    if(aiPos < 50) {aiPos = 50;}
    if(aiPos > 200) {aiPos = 200;}

    if(direction == 'down'){
        aiPos = aiPos + 10px;
    }else{
        aiPos = aiPos - 10px;
    }
}