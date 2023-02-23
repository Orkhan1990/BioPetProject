let basket=JSON.parse(localStorage.getItem("sebet"))||[];
let favoriteBasket=JSON.parse(localStorage.getItem("sevimliSebet"))||[];
let registerUsers = JSON.parse(localStorage.getItem("registerUser"))||[];
let logedInUser=JSON.parse(localStorage.getItem("logedInUser"));


let user={
 id:1,
 name:"User1",
 surname:"User1",
 email:"user@gmail.com",
 password:12345,
 confPassword:12345
}