/*-------------------------js for toggle menu---------------------------*/

var menu = document.getElementById("menu");
menu.style.maxHeight = "0px";
function clickmenu()
{
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "200px";
    }
    else if( menu.style.maxHeight != "0px")
    {
        menu.style.maxHeight = "0px";
    }
}

// ---------------------------js for product gallery----------------------

var productImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].onclick = function() {
    productImg.src =  SmallImg[0].src ;
}
SmallImg[1].onclick = function() {
    productImg.src =  SmallImg[1].src ;
}
SmallImg[2].onclick = function() {
    productImg.src =  SmallImg[2].src ;
}
SmallImg[3].onclick = function() {
    productImg.src =  SmallImg[3].src ;
}