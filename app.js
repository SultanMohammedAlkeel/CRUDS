let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

// get total
function getTotal() {
  if (price.value != '') {
    let result = +price.value + +taxes.value + +ads.value - +discount.value
    total.innerHTML = result
    total.style.background = '#050'
  } else {
    total.innerHTML = ''
    total.style.background = '#a00d02'
  }
}

let Products

if (localStorage.Products != null) {
  Products = JSON.parse(localStorage.Products)
} else {
  Products = []
}
// create product
submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  }
  Products.push(newPro)
  localStorage.setItem('Products', JSON.stringify(Products))
  console.log(Products)
}
// save localstorage
// clear inputs
// read
// delete
// update
// search
// clean data
