var attempt = 1;

function startpage(){
    var player =prompt("What's your name?");
    if(player.length!=0)document.getElementById('player').textContent = ("Good luck "+player+"!");
}
function play(){
    document.getElementById('attempts').textContent = ("Attempt "+attempt+" of 3");

    if(attempt>3){
        attempt = 0;
    }
    var num1 = Math.floor(9*Math.random());
    var num2 = Math.floor(9*Math.random());
    var num3 = Math.floor(9*Math.random());

    if(num1!=0)
        document.getElementById('one').src = ("img/"+(num1-1)+".jpg");
    else
        document.getElementById('one').src = "img/"+8+".jpg";

    document.getElementById('four').src = "img/"+num1+".jpg";

    if(num1!=8)
        document.getElementById('seven').src = "img/"+(num1+1)+".jpg";
    else
        document.getElementById('seven').src = "img/"+0+".jpg";


    if(num2!=0)
        document.getElementById('two').src = ("img/"+(num2-1)+".jpg");
    else
        document.getElementById('two').src = "img/"+8+".jpg";

    document.getElementById('five').src = "img/"+num2+".jpg";

    if(num2!=8)
        document.getElementById('eight').src = "img/"+(num2+1)+".jpg";
    else
        document.getElementById('eight').src = "img/"+0+".jpg";


    if(num3!=0)
        document.getElementById('three').src = ("img/"+(num3-1)+".jpg");
    else
        document.getElementById('three').src = "img/"+8+".jpg";

    document.getElementById('six').src = "img/"+num3+".jpg";

    if(num3!=8)
        document.getElementById('nine').src = "img/"+(num3+1)+".jpg";
    else
        document.getElementById('nine').src = "img/"+0+".jpg";


    if(attempt==3){
            if(num1==num2&&num2==num3){
                alert("You won:)");
            } else {
                alert("You lost:(");
            }
            attempt = 0;
     }
    attempt++;
}