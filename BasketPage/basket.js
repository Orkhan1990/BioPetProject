let basketCards = document.querySelector(".basket_cards");
let totalPriceCount=document.querySelector(".total_price_count");
console.log(totalPriceCount);


function showBasket(arr) {
  let countArray=[];
  if (arr.length == 0) {
    basketCards.innerHTML = `
         <div class="empty_basket">
         <h2>Səbətdə məhsul mövcud deyil.Məhsul seçmək üçün <a href="../index.html">Ana Səhifə</a>yə keçid edin!</h2>
         </div>
        `;
  } else {
    basketCards.innerHTML = "";
    arr.forEach((element) => {
      basketCards.innerHTML += `
             <div class=basket_card>
             <img src="${element.image}"/>
             <div class="basket_card_content">
             <p>${element.title}</p>
             <div class="basket_price_count">
             <span>Count: <span class="basket_count">${
               element.count
             }</span></span>
             <span>Price: <span class="basket_count">${
               element.price * element.count
             }</span>
             <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
          fill="black"
        />
      </svg>
             </span>
             <button name="inc"  onclick="addCount(event,${
               element.id
             })" class="basket_card_button">+</button>
             <button name="dec"  onclick="addCount(event,${
               element.id
             })" class="basket_card_button">-</button>
             </div>
             <i class="fa-solid fa-trash" onclick="addToTrash(${
               element.id
             })"></i>
             </div>
             </div>
             `;  
             
             countArray.push(element.price*element.count)
             let result=0;
             for(let i=0;i<countArray.length;i++){
                result+=countArray[i];
             }
            
         
             totalPriceCount.innerHTML=`${result}`;
            
    });
  }
}

// if (basket.length==0) {
//   document.querySelector(".total_price").classList.add('hide_total_price');
// }

const addToTrash = (id) => {
  let indexOfProduct = basket.findIndex((p) => p.id === id);
  basket.splice(indexOfProduct, 1);
  localStorage.setItem("sebet", JSON.stringify(basket));
  showBasket(basket);
};

function addCount(event, id) {
  console.log(event.target.name);
  let findProduct = basket.find((p) => p.id === id);
  console.log(findProduct.count + 1);
  findProduct.count =
    event.target.name === "inc" ? findProduct.count + 1 : findProduct.count - 1;
  if (findProduct.count === 0) {
    let productIndex = basket.findIndex((p) => p.id === id);
    basket.splice(productIndex, 1);
    localStorage.setItem("sebet", JSON.stringify(basket));
  }
  localStorage.setItem("sebet", JSON.stringify(basket));
  showBasket(basket);
}

window.addEventListener("load", showBasket(basket));
