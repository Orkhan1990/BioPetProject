let userEmail = document.querySelector(".email");
let userPassword = document.querySelector(".password");
let messageError = document.querySelector(".error_message");
let rememberMe = document.querySelector(".rememberMe");
let loginBtn = document.querySelector(".login_btn");
console.log(loginBtn);

console.log("salam");
loginBtn.addEventListener("click", () => {
  event.preventDefault();
  let existUser = registerUsers.find((p) => p.email == userEmail.value);
  if (userEmail.value !== "" && userPassword.value !== "") {
    if (existUser) {
      if (existUser.password == userPassword.value) {
        localStorage.setItem("logedInUser", JSON.stringify(existUser));
        window.location.href = "../index.html";
      } else {
        messageError.innerHTML = "Şifrə düzgün deyil!";
      }
    } else {
      messageError.innerHTML =
        "Belə bir istifadəçi mövcud deyil,zəhmət olmasa qeydiyyatdan keçin!";
    }
  } else {
    messageError.innerHTML = "Bütün xanaları doldurun!";
  }
});

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   rememberMe.setAttribute("checked", "checked");
//   userEmail.value = localStorage.username;
// } else {
//   rememberMe.removeAttribute("checked");
//   userEmail.value = "";
// }

// function lsRememberMe() {
//     if (rememberMe.checked && userEmail.value !== "") {
//       localStorage.username = userEmail.value;
//       localStorage.checkbox = rememberMe.value;
//     } else {
//       localStorage.username = "";
//       localStorage.checkbox = "";
//     }
//   }
