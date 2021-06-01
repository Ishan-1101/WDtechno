var colors=['#674AB3','#A348A6', '#9F63C4' , '#9075D8' , '#CEA2D7']
function changeColor(){
    var num=Math.floor(Math.random()*(colors.length));
    document.getElementById("target").style.backgroundColor=colors[num];
}