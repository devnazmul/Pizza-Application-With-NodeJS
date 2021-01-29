import axios from 'axios'
import Noty from 'noty'

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.getElementById('quantityCounter');


/*************************** 
 * ADD TO CART FUNCTION
 * *************************/ 
function updateCart(pizza){
    axios.post('/update-cart', pizza).then( res => {
        // INCREASE CART ITEM NUMBER
        cartCounter.innerText = res.data.totalQuantity
        
        new Noty({
            type: 'success',
            timeout: 2000,
            text: res.data.pizzaName.name + ' is added to cart successfully!',
            layout: 'bottomRight'
        }).show()

    })
}

/************************************************ 
 * ADD TO CART BUTTON EVENT LISTENER FUNCTION
 * **********************************************/ 
addToCart.forEach((btn) => {
    
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })

})









