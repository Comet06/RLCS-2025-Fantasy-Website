function loginFunction(){
    document.getElementById("test").innerHTML = "This text can change!!";
  }

function test(){
  console.log('test')
}


let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";
function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
      menuList.style.maxHeight = "600px";
  }
  else{
      menuList.style.maxHeight = "0px";
  }
}