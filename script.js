var p1=0;
var p2=0;
var target=30;
var count=1;
function calc()
{
    if(count%2==1)
    {
        var player1=(Math.floor(Math.random()*10)%6)+1;
        document.getElementById("score").value=player1
        p1+=player1;
        document.getElementById("in1").value=p1;
    }
    else
    {
        var player2=(Math.floor(Math.random()*10)%6)+1;
        document.getElementById("score").value=player2
        p2+=player2;
        document.getElementById("in2").value=p2;
    }
    count++;
    if(p1>=target)
    {
        document.getElementById("Final").innerHTML="player1 won the game";
        
    }
    else if(p2>=target)
    {
        document.getElementById("Final").innerHTML="player2 won the game";
        
    }

}