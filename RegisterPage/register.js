let nameOfUser = document.querySelector(".name");
let surnameOfUser = document.querySelector(".surname");
let passwordOfUser = document.querySelector(".password");
let confirmPasswordOfUser = document.querySelector(".confirm_password");
let emailOfUser = document.querySelector(".email");
let errorMessage = document.querySelector(".error_message");
let registerButton = document.querySelector(".register_button");
let checkTerms=document.querySelector('.check_box');

console.log(registerUsers)
console.log(checkTerms)

registerButton.addEventListener("click", () => {
    event.preventDefault();
  if (
    nameOfUser.value != "" &&
    surnameOfUser.value != "" &&
    passwordOfUser.value != "" &&
    confirmPasswordOfUser.value != "" &&
    emailOfUser.value != ""
  ) {
    var findUserViaEmail = registerUsers.find(
      (p) => p.email === emailOfUser.value
    );
    if (!findUserViaEmail) {
      if (passwordOfUser.value === confirmPasswordOfUser.value) {
        if(checkTerms.checked==true){
            let newUser = {};
            newUser.name = nameOfUser.value;
            newUser.surname = surnameOfUser.value;
            newUser.email = emailOfUser.value;
            newUser.password = passwordOfUser.value;
            newUser.confPassword = confirmPasswordOfUser.value;
            registerUsers.push(newUser);
            localStorage.setItem("registerUser", JSON.stringify(registerUsers));
            window.location.href='../LoginPage/login.html';
        }else{
            errorMessage.innerHTML="Qaydaları qebul etmədiyinizə görə qeydiyyatdan keçmək mümkün deyil!"
        }
        
      } else {
        errorMessage.innerHTML = "Şifrə eyni  deyil!";
      }
    } else {
      errorMessage.innerHTML = "Belə bir istifadəçi artıq mövcuddur!";
    }
  } else {
    errorMessage.innerHTML = "Bütün xanaları doldurun!";
  }
});
