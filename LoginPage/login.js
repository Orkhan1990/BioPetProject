let userEmail = document.querySelector(".email");
let userPassword = document.querySelector(".password");
let messageError = document.querySelector(".error_message");
let rememberMe = document.querySelector(".rememberMe");
let loginBtn = document.querySelector(".login_btn");

loginBtn.addEventListener("click", () => {
  event.preventDefault();
  let existUser = registerUsers.find((p) => p.email == userEmail.value);
      if(existUser){
        if(userEmail.value!=="" && userPassword!==""){
                 if(existUser.password===userPassword.value){
                  localStorage.setItem("logedInUser",JSON.stringify(existUser));
                  window.location.href="../index.html"
                 }else{
                  messageError.innerHTML="Şifə yalnışdır!"
                 }

        }else{
          messageError.innerHTML="Bütün xanaları doldurun!"
        }
      }else{
        messageError.innerHTML="Belə bir istifadəçi mövcud deyil.Zəhmət olmasa qeydiyyatdan keçin!"
      }
});


