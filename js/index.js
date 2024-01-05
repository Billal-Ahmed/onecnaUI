
function showBurderContent(){
    let mobile_menu = document.getElementById("mobile_menu");
    mobile_menu.classList.toggle("hidden");
}

function showProfileContent() {
    identity_top_dropdown_content = document.getElementById("identity_top_dropdown_content")
    identity_top_dropdown_content.classList.toggle("hidden");
    
}

function cookieOP(){
    let cookieId = document.getElementById("cookieId");
    let cookieButton = document.getElementById("cookieButton");
    cookieButton.addEventListener("click",()=>{
      cookieId.classList.toggle("hidden");
    })
}
cookieOP();
