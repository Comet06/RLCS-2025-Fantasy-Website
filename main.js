function loginFunction(){
    document.getElementById("test").innerHTML = "This text can change!!";
  }

let buttonPressed = false

function dark(){
  if (buttonPressed){
    buttonPressed = false
    document.body.style.backgroundColor = '#e1e1e1e6';
    document.getElementById('mode').innerHTML = "Dark Mode"
  } else {
    buttonPressed = true
    document.body.style.backgroundColor = '#444444';
    document.getElementById('mode').innerHTML = "Light Mode"
  }
}

function test(){
  console.log('test')
}