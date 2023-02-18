let basket=JSON.parse(localStorage.getItem("sebet"))||[];
let basketCardContainer=document.querySelector('.basket_card_container');


function showBasket(arr){
   arr.forEach((element) => {
        basketCardContainer.innerHTML+=
        `
        <div class=basket_card>
        <img src="${element.image}"/>
        <div class="basket_card_content">
        <p>${element.title}</p>
        <div class="basket_price_count">
        <span>Count: <span class="basket_count">${element.count}</span></span>
        <span>Price: <span class="basket_count">${element.price*element.count}</span></span>
        <button name="inc"  onclick="addCount(event,${element.id})" class="basket_card_button">+</button>
        <button name="dec"  onclick="addCount(event,${element.id})" class="basket_card_button">-</button>
        </div>
        <i class="fa-solid fa-trash" onclick="addToTrash(${element.id})"></i>
        </div>
        </div>
        ` 
       
    });
    
}
 
function addCount(event,id){
    console.log(event.target.name);
    let findProduct=basket.find(p=>p.id===id);
    console.log(findProduct.count+1);
    event.target.name==="inc"?findProduct.count+1:findProduct.count-1;
 }

window.addEventListener('load',showBasket(basket));


