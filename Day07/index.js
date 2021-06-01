function func() {
    var x = document.getElementById("num").value;
    document.getElementById("para").style.fontSize="100px";
    document.getElementById("para").style.color="royalblue";
    document.getElementById("para").style.backgroundColor="lavender";
    document.getElementById("para").innerHTML="Hello "+x;
    document.getElementById("num").value="";
    alert("Hello "+x);
}

function table(){

    var y = document.getElementById("num").value;
   if(y%2==0)
   {
       document.getElementById("para").style.color="blue";
       document.getElementById("para").innerHTML="Even";
       document.getElementById("para").style.fontSize="100px";
   }
   else{
    document.getElementById("para").style.color="red";
    document.getElementById("para").innerHTML="Odd";
    document.getElementById("para").style.fontSize="100px";
   }
}