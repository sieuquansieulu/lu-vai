let myemail = document.getElementById("email");
let but = document.getElementById("button1");

function notsubmit(e) {
    e.preventDefault();
    if(myemail.value == ""){
        return;
    }
else{
  
    but.style.backgroundColor = "aqua";
    location.href = "https://contact.gamemaker.io/contact-us";
}
}
but.addEventListener("click", notsubmit);
    


   



