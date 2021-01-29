import axios from 'axios'
let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.getElementById('quantityCounter');


function updateCart(pizza) {
axios.post('/update-cart', pizza).then(res =>{
    console.log(res)
    // cartCounter.innerText = res.data.totalQuantity
})
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    let pizza = JSON.parse(btn.dataset.pizza)   
    updateCart(pizza)
    })
})